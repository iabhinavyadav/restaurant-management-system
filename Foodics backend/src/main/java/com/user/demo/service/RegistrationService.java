package com.user.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.demo.model.Registration;
import com.user.demo.repo.RegistrationRepo;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepo repo;
	
	
	public Registration saveuser(Registration user) {
		return repo.save(user);
	}

	public Registration fetchUserByEmailId(String email) {
		return repo.findByEmailid(email);
	}
	
	public Registration fetchUserByEmailIdAndPassword(String email,String password) {
		return repo.findByEmailidAndPassword(email,password);
	}

	
}
