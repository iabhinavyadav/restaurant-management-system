package com.user.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.demo.model.Booking;

public interface BookingRepo extends JpaRepository<Booking, Integer> {

}
