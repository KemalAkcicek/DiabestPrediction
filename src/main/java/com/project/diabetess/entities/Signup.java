package com.project.diabetess.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="signup")
@Data
public class Signup {
 
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;
	
  @Column(columnDefinition = "TEXT")
  private String KullanıcıAdı;
  
  @Column(columnDefinition = "TEXT")
  private String Parola;
  
  @Column(columnDefinition = "TEXT")
  private String Email;
  
  private int Number;

public String getKullanıcıAdı() {
	return KullanıcıAdı;
}

public void setKullanıcıAdı(String kullanıcıAdı) {
	KullanıcıAdı = kullanıcıAdı;
}

public String getParola() {
	return Parola;
}

public void setParola(String parola) {
	Parola = parola;
}

public String getEmail() {
	return Email;
}

public void setEmail(String email) {
	Email = email;
}

public int getNumber() {
	return Number;
}

public void setNumber(int number) {
	Number = number;
}




  
  
  
}
