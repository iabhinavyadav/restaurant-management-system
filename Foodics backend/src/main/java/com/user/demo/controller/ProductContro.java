package com.user.demo.controller;


import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.user.demo.model.Product;
import com.user.demo.repo.ProductRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "foods")
public class ProductContro {
	private byte[] bytes;
	@Autowired
	private ProductRepo productRepo;
	
	@GetMapping("/get")
	public List<Product> getProducts() {
		return productRepo.findAll();
	}
	
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
	}

	@PostMapping("/add")
	public void createProduct(@RequestBody Product product) throws IOException {
		product.setPicByte(this.bytes);
		productRepo.save(product);
		this.bytes = null;
	}
	
	@DeleteMapping(path = { "/{id}" })
	public Product deleteProduct(@PathVariable("id") int id) {
		Product food = productRepo.getOne(id);
		productRepo.deleteById(id);
		return food;
	}
	@PutMapping("/update")
	public void updateProduct(@RequestBody Product food) {
		productRepo.save(food);
	}
}
