package com.user.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.user.demo.model.Registration;
import com.user.demo.repo.RegistrationRepo;
import com.user.demo.service.RegistrationService;

@RestController
public class RegContro {
	
	@Autowired
	private RegistrationService service;
	
	@Autowired
	private RegistrationRepo registrationRepo;
	
	@PostMapping("/registeruser")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration registerUser(@RequestBody Registration user) throws Exception {
		String tempEmailid =user.getEmailid();
		if(tempEmailid !=null && !"".equals(tempEmailid)) {
		Registration userobj=	service.fetchUserByEmailId(tempEmailid);
		if(userobj != null) {
			throw new Exception("user with " +tempEmailid +"is already exist");
		}
		}
		Registration userObj=null;
		userObj=service.saveuser(user);
		return userObj;
		
	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration loginUser(@RequestBody Registration user) throws Exception {
		String tempEmailid=user.getEmailid();
		String tempPass=user.getPassword();
		Registration userobj=null;
		if(tempEmailid != null && tempPass != null ) {
			userobj=service.fetchUserByEmailIdAndPassword(tempEmailid, tempPass);
			
		}
		if(userobj==null) {
			throw new Exception("User doesn't exist");
		}
		return userobj;
	}
	
	@GetMapping("/get")
	@CrossOrigin(origins="http://localhost:4200")
	public List<Registration> getUsers() {
		return registrationRepo.findAll();
	}
	
	@DeleteMapping(path = { "/{id}" })
	@CrossOrigin(origins="http://localhost:4200")
	public Registration deleteUser(@PathVariable("id") int id) {
		Registration user = registrationRepo.getOne((id));
		registrationRepo.deleteById(id);
		return user;
	}
	
	

}
