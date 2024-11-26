package com.project.diabetess.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.diabetess.entities.FormResult;

public interface FormRepository  extends JpaRepository<FormResult, Long>{

}
