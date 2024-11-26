package com.project.diabetess.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.diabetess.Repository.SignupRepository;
import com.project.diabetess.Service.SignupService;
import com.project.diabetess.entities.FormResult;
import com.project.diabetess.entities.Signup;

@RestController
@RequestMapping("/signup")
public class SignupController {
    
	@Autowired
	private SignupService signupService;
	
	@PostMapping("/save")
	public ResponseEntity<String> saveSignup(@RequestBody Signup signup){
		signupService.saveSignup(signup);
        return ResponseEntity.ok("Data başarıyla kaydedilidi");

	}
	
	@GetMapping("/getData")
	public ResponseEntity<List<Signup>> getData(){
		List<Signup> dataList=signupService.getAllData();
        return ResponseEntity.ok(dataList);

	}
	
	
	
}
