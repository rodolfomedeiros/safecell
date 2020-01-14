package com.devroods.safecell.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devroods.safecell.models.Occurrence;

public interface OccurrenceRepository extends JpaRepository<Occurrence, Long>{
	
	Occurrence findById(long id);
	Occurrence findByImei1OrImei2(String imei1, String imei2);
	
}