package com.magnit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.magnit.model.Feedback;
import com.magnit.repository.FeedbackRepository;

@Service
public class FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;
	
	public Feedback saveFeedback(Integer happiness) {
		Feedback feedback = new Feedback();
		feedback.setHappiness(happiness);
		feedback = feedbackRepository.save(feedback);
		List<Feedback> list = feedbackRepository.findAll();
		int sum = list.stream().mapToInt(Feedback::getHappiness).sum();
		System.out.println(sum/list.size());
		feedback.setHappiness(sum/list.size());
		return feedback;
	}

	
}
