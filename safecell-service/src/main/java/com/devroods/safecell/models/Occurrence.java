package com.devroods.safecell.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity(name = "occurrences")
public class Occurrence {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(unique=true)
	private String bo;
	
	@NotNull
	@Column(unique=true)
	private String imei1;
	
	@NotNull
	@Column(unique=true)
	private String imei2;
	
	@NotNull
	private String data;
	
	@NotNull
	private String horario;
	
	@NotNull
	private int quantIndividuos;
	
	@NotNull
	private int tipoVeiculo;
	
	@NotNull
	private int tipoArma;
	
	@NotNull
	private boolean status;
	
	@NotNull
	private long idUser;
	
	@NotNull
	private String estado;
	
	@NotNull
	private String cidade;
	
	@NotNull
	private String bairro;
	
	@NotNull
	private String rua;
	
	@NotNull
	private String numero;
	
	private String complemento;
	
	@NotNull
	private String cep;
	
	private double lat;
	
	private double log;
	
	public Occurrence() {}

	public Occurrence(long id, @NotNull String bo, @NotNull String imei1, @NotNull String imei2, @NotNull String data,
			@NotNull String horario, @NotNull int quantIndividuos, @NotNull int tipoVeiculo, @NotNull int tipoArma,
			@NotNull boolean status, @NotNull long idUser, @NotNull String estado, @NotNull String cidade,
			@NotNull String bairro, @NotNull String rua, @NotNull String numero, String complemento,
			@NotNull String cep, double lat, double log) {
		super();
		this.id = id;
		this.bo = bo;
		this.imei1 = imei1;
		this.imei2 = imei2;
		this.data = data;
		this.horario = horario;
		this.quantIndividuos = quantIndividuos;
		this.tipoVeiculo = tipoVeiculo;
		this.tipoArma = tipoArma;
		this.status = status;
		this.idUser = idUser;
		this.estado = estado;
		this.cidade = cidade;
		this.bairro = bairro;
		this.rua = rua;
		this.numero = numero;
		this.complemento = complemento;
		this.cep = cep;
		this.lat = lat;
		this.log = log;
	}

	public String getBo() {
		return bo;
	}

	public void setBo(String bo) {
		this.bo = bo;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getImei1() {
		return imei1;
	}

	public void setImei1(String imei1) {
		this.imei1 = imei1;
	}

	public String getImei2() {
		return imei2;
	}

	public void setImei2(String imei2) {
		this.imei2 = imei2;
	}
	
	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHorario() {
		return horario;
	}

	public void setHorario(String horario) {
		this.horario = horario;
	}

	public int getQuantIndividuos() {
		return quantIndividuos;
	}

	public void setQuantIndividuos(int quantIndividuos) {
		this.quantIndividuos = quantIndividuos;
	}

	public int getTipoVeiculo() {
		return tipoVeiculo;
	}

	public void setTipoVeiculo(int tipoVeiculo) {
		this.tipoVeiculo = tipoVeiculo;
	}

	public int getTipoArma() {
		return tipoArma;
	}

	public void setTipoArma(int tipoArma) {
		this.tipoArma = tipoArma;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public long getIdUser() {
		return idUser;
	}

	public void setIdUser(long idUser) {
		this.idUser = idUser;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getRua() {
		return rua;
	}

	public void setRua(String rua) {
		this.rua = rua;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public double getLat() {
		return lat;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public double getLog() {
		return log;
	}

	public void setLog(double log) {
		this.log = log;
	}

	@Override
	public String toString() {
		return "Occurrence [id=" + id + ", bo=" + bo + ", imei1=" + imei1 + ", imei2=" + imei2 + ", data=" + data
				+ ", horario=" + horario + ", quantIndividuos=" + quantIndividuos + ", tipoVeiculo=" + tipoVeiculo
				+ ", tipoArma=" + tipoArma + ", status=" + status + ", idUser=" + idUser + ", estado=" + estado
				+ ", cidade=" + cidade + ", bairro=" + bairro + ", rua=" + rua + ", numero=" + numero + ", complemento="
				+ complemento + ", cep=" + cep + ", lat=" + lat + ", log=" + log + "]";
	}	
}
