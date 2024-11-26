package com.project.diabetess.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.project.diabetess.Repository.FormRepository;
import com.project.diabetess.Service.FormService;
import com.project.diabetess.entities.FormResult;

@RequestMapping("/api/form")
@CrossOrigin
@RestController
public class FormResultController {

	@Autowired
	private FormService formService;
	
	@PostMapping("/saveData")
	public  ResponseEntity<String> saveData(@RequestBody FormResult formResult){
		formService.saveFormResult(formResult);
        return ResponseEntity.ok("Data başarıyla kaydedilidi");
	}
	@GetMapping("/getData")
	public ResponseEntity<List<FormResult>> getData(){
		List<FormResult> dataList=formService.getAllData();
        return ResponseEntity.ok(dataList);

	}
	@GetMapping("getData/{id}")
    public FormResult getOneForm(@PathVariable Long id) {
		return formService.getOneForm(id);
	}
	
	
	
	
}
