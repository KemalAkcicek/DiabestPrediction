package com.project.diabetess.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.diabetess.Repository.SignupRepository;
import com.project.diabetess.entities.Signup;

@Service
public class SignupService {

	@Autowired
	public SignupRepository  signupRepository;
	
	
	public void saveSignup(Signup signup) {
		signupRepository.save(signup);
	}


	public List<Signup> getAllData() {
		return signupRepository.findAll();
	}
	
}
