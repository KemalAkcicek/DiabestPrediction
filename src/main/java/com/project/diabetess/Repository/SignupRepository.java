package com.project.diabetess.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.diabetess.entities.Signup;

public interface SignupRepository  extends JpaRepository<Signup, Long>{

}
