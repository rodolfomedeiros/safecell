package com.devroods.safecell.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devroods.safecell.models.User;
import com.devroods.safecell.models.utils.Login;
import com.devroods.safecell.repositories.UserRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/user")
@Api(value="API RESTful - Usuários")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private PasswordEncoder passwordEnconder;
	
	@ApiOperation(value="Autenticação")
	@PostMapping("/auth")
	public User auth(@RequestBody @Valid Login login) throws Exception {

		User user = userRepository.findByEmail(login.getEmail());
		
		if (user == null) return null;
		
		if (passwordEnconder.matches(
				login.getSenha(),
				user.getSenha()
			)) {
			return user;
		} else return null;
	}
	
	@ApiOperation(value="Obter um usuário")
	@GetMapping("/user/{id}")
	public User getUser(@PathVariable long id){
		return userRepository.findById(id);
	}
	
	@ApiOperation(value="Salvar um novo usuário")
	@PostMapping("/save")
	public User save(@RequestBody @Valid User user) {
		
		if(userRepository.findByEmail(user.getEmail()) != null) return null;
		
		user.setSenha(passwordEnconder.encode(user.getSenha()));
		
		return userRepository.save(user);
	}
	
	@ApiOperation(value="Atualizar um usuário")
	@PutMapping("/update")
	public User update(@RequestBody @Valid User user) {
		
		User userDB = userRepository.findById(user.getId());
		
		if (userDB == null) return null;
		
		if (!userDB.getSenha().equalsIgnoreCase(user.getSenha())) {
			user.setSenha(passwordEnconder.encode(user.getSenha()));
		}
		
		return userRepository.save(user);
	}
	
	@ApiOperation(value="Deleta um usuário")
	@DeleteMapping("/delete/{id}")
	public Boolean delete(@PathVariable long id) {
	
		try {
			userRepository.deleteById(id);
			return true;
		} catch (IllegalArgumentException e) {
			return false;
		}
	}

}
