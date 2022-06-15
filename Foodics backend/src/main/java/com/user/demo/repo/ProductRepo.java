package com.user.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.demo.model.Product;

public interface ProductRepo extends JpaRepository<Product, Integer> {

}
