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
  submitted: boolean = false;
  happiness: number = 1;
  overallHappiness: number = 0;
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
      question: "Describe our culture in few words.",
      answer: ""
    },
    {
      question: "How frequently do you receive recognition from your manager?",
      answer: "NEVER"
    },
    {
      question: " Are you satisfied with your compensation and benefits?",
      answer: "NO"
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
    this.happiness = 0;
    if(this.questions[0].answer == "YES") {
      this.happiness++;
    }
    if(this.questions[1].answer == "YES") {
      this.happiness++;
    }
    if(this.questions[2].answer.length > 0) {
      this.happiness++;
    }
    if(this.questions[3].answer != "NEVER") {
      this.happiness++;
    }
    if(this.questions[4].answer == "YES") {
      this.happiness++;
    }

    if(this.happiness == 0) {
      this.happiness = 1;
    }

    this.appService.saveHappines(this.happiness).subscribe((result: any) => {
      console.log("result");
      this.submitted = true;
      this.overallHappiness = result.happiness;
    });
  }
}
