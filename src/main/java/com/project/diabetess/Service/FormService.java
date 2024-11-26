package com.project.diabetess.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.diabetess.Repository.FormRepository;
import com.project.diabetess.entities.FormResult;

@Service
public class FormService {
	
	@Autowired
	public FormRepository formRepository;
	
	public void saveFormResult(FormResult formResult) {
		formRepository.save(formResult);
	}
	
	public List<FormResult> getAllData(){
		return formRepository.findAll();
	}

	public FormResult getOneForm(Long id) {
		
		return formRepository.findById(id).orElse(null);
	}

}
