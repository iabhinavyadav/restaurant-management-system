package com.user.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Booking {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	private String name;
	private int Seats;
	private String Date;
	private String MobileNumber;
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getSeats() {
		return Seats;
	}
	public void setSeats(int seats) {
		Seats = seats;
	}
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	
	public String getMobileNumber() {
		return MobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		MobileNumber = mobileNumber;
	}
	public Booking(int id, String name, int seats,String mobileNumber, String date) {
		this.Id=id;
		this.name=name;
		this.Seats=seats;
		this.MobileNumber=mobileNumber;
		this.Date=date;
	}
	public Booking() {
		
	}
	
	
	
	
}
