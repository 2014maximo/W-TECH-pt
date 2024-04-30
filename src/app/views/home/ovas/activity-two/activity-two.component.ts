import { Component } from '@angular/core';
import { IActivityTwo } from '../../models/activity-two.model';
import { QUESTIONS_1 } from './constants/activity-two.constant';

@Component({
  selector: 'app-activity-two',
  templateUrl: './activity-two.component.html',
  styleUrls: ['./activity-two.component.scss']
})
export class ActivityTwoComponent {

  public questions: IActivityTwo[] = QUESTIONS_1;
  public showResponses: boolean = false;

  constructor(){}

  checkAnswers() {
    
    let correctCount = 0;
    this.questions.forEach(question => {
      if (question.selected === question.answer) {
        correctCount++;
      }
    });
    this.showResponses = true;
    alert(`Tienes ${correctCount} respuestas correctas de ${this.questions.length}`);
  }

}
