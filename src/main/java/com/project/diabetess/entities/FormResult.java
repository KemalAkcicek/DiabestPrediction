package com.project.diabetess.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "formResult")
@Data
public class FormResult {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	
	private int Pregnancies;
	private int Glucose;
	private int BloodPressure;
	private int SkinThickness;
	private int Insulin;
	private int BMI;
	private int DiabetesPedigreeFunction;
	private int Age;
	private int Result2;
	
	
	@Column(columnDefinition = "TEXT")
	private String adiSoyadi;
	


	

	public int getResult2() {
		return Result2;
	}

	public void setResult2(int result2) {
		Result2 = result2;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getPregnancies() {
		return Pregnancies;
	}

	public void setPregnancies(int pregnancies) {
		Pregnancies = pregnancies;
	}

	public int getGlucose() {
		return Glucose;
	}

	public void setGlucose(int glucose) {
		Glucose = glucose;
	}

	public int getBloodPressure() {
		return BloodPressure;
	}

	public void setBloodPressure(int bloodPressure) {
		BloodPressure = bloodPressure;
	}

	public int getSkinThickness() {
		return SkinThickness;
	}

	public void setSkinThickness(int skinThickness) {
		SkinThickness = skinThickness;
	}

	public int getInsulin() {
		return Insulin;
	}

	public void setInsulin(int insulin) {
		Insulin = insulin;
	}

	public int getBMI() {
		return BMI;
	}

	public void setBMI(int bMI) {
		BMI = bMI;
	}

	public int getDiabetesPedigreeFunction() {
		return DiabetesPedigreeFunction;
	}

	public void setDiabetesPedigreeFunction(int diabetesPedigreeFunction) {
		DiabetesPedigreeFunction = diabetesPedigreeFunction;
	}

	public int getAge() {
		return Age;
	}

	public void setAge(int age) {
		Age = age;
	}

	public String getAdiSoyadi() {
		return adiSoyadi;
	}

	public void setAdiSoyadi(String adiSoyadi) {
		this.adiSoyadi = adiSoyadi;
	}

}
