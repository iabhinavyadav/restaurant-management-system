package com.user.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.user.demo.model.Booking;
import com.user.demo.model.Product;
import com.user.demo.repo.BookingRepo;
import com.user.demo.service.BookingService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class BookingContro {

	@Autowired
	BookingService service;
	
	@Autowired
	BookingRepo bookingrepo;
	
	@PostMapping("/booking")
	public Booking reserveTable(@RequestBody Booking table) throws Exception{
		Booking obj=null;
		obj=service.savebooking(table);
		return obj;
	}
	
	@GetMapping("/bookingList")
	public List<Booking> getBookings() {
		return bookingrepo.findAll();
	}
}
