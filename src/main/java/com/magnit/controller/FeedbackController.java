package com.magnit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.magnit.model.Feedback;
import com.magnit.service.FeedbackService;

@RestController
@RequestMapping("/api/save")
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;

	@GetMapping("")
    public Feedback saveFeedback(@RequestParam Integer happiness) {
        
		Feedback stud = feedbackService.saveFeedback(happiness);
        return stud;
    }
}
