package com.devroods.safecell.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devroods.safecell.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findById(long id);
	
	User findByEmail(String email);
}
