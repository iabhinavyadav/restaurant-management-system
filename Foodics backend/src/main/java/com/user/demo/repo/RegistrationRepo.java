package com.user.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.demo.model.Registration;

public interface RegistrationRepo extends JpaRepository<Registration,Integer> {

	public Registration findByEmailid(String emailid);
	public Registration findByEmailidAndPassword(String emailid,String password);
}
