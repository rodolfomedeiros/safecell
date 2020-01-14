package com.devroods.safecell.models.utils;

import javax.validation.constraints.NotNull;

public class Login {
	
	@NotNull
	private String email;
	@NotNull
	private String senha;
	
	public Login() {
		super();
	}
	
	public Login(@NotNull String email, @NotNull String senha) {
		super();
		this.email = email;
		this.senha = senha;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
