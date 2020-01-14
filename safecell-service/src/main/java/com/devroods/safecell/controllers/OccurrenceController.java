package com.devroods.safecell.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devroods.safecell.models.Occurrence;
import com.devroods.safecell.repositories.OccurrenceRepository;
import com.devroods.safecell.repositories.UserRepository;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping(value="/occurrence")
@Api(value="")
public class OccurrenceController {
	
	@Autowired
	private OccurrenceRepository occurrences;
	@Autowired
	private UserRepository users;
	
	@ApiOperation(value="Salva ocorrencia")
	@PutMapping("/save")
	public Occurrence save(@RequestBody @Valid Occurrence occurrence) {
		return users.existsById(occurrence.getIdUser()) ? occurrences.save(occurrence) : null;
	}
	
	// GETS
	
	@ApiOperation(value="Obtêm todos as ocorrencias")
	@GetMapping("/ocorrencias")
	public List<Occurrence> occurrences() {
		return occurrences.findAll();
	}
	
	@ApiOperation(value="Obter ocorrência por imei1 ou imei2")
	@GetMapping("/{imei}")
	public Occurrence occurrences(@PathVariable String imei) {
		return occurrences.findByImei1OrImei2(imei, imei);
	}

}
