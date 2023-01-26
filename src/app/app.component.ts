import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Magnit';
  questionId: number = 0;
  questions: any = [
    {
      question: "Are you proud to be a member of your team?",
      answer: "NO"
    },
    {
      question: "Does your team help you to complete your work?",
      answer: "NO"
    },
    {
      question: "Describe our culture in fewer than 20 words",
      answer: ""
    },
    {
      question: "How frequently do you receive recognition from your manager?",
      answer: "NEVER"
    },
    {
      question: " Are you satisfied with your compensation and benefits?",
      answer: ""
    }
];

  public constructor(public appService: AppService) {

  }

  public prevQuestion() {
    this.questionId--;
  }

  public nextQuestion() {
    this.questionId++;
  }

  public submit() {
    var happines = 0;
    if(this.questions[0].answer == "YES") {
      happines++;
    }
    if(this.questions[1].answer == "YES") {
      happines++;
    }
    if(this.questions[2].answer.length > 0) {
      happines++;
    }
    if(this.questions[3].answer != "NEVER") {
      happines++;
    }
    if(this.questions[4].answer == "YES") {
      happines++;
    }

    this.appService.saveHappines(happines).subscribe(((result: any) => {
      console.log("result");
    });
  }
}
