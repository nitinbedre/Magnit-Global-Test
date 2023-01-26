package com.magnit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.magnit.model.Feedback;
import com.magnit.service.FeedbackService;

@RestController
@RequestMapping("/api/save")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;

	@PostMapping("")
    public Feedback saveFeedback(@RequestBody Feedback feedback) {
        
		Feedback stud = feedbackService.saveFeedback(feedback);
        return stud;
    }
}
