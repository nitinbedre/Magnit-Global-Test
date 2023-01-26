package com.magnit.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Feedback {
	
	@Id
	@jakarta.persistence.GeneratedValue(strategy= GenerationType.AUTO)
	String id;
	
	Integer happines;
}
