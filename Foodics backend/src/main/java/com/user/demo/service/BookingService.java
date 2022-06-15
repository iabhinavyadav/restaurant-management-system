package com.user.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.demo.model.Booking;
import com.user.demo.model.Registration;
import com.user.demo.repo.BookingRepo;

@Service
public class BookingService {
	
	@Autowired
	BookingRepo bookrepo;
	
	public Booking savebooking(Booking tables) {
		return bookrepo.save(tables);
	}

}
