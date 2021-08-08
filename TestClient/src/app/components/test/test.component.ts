import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Test{
  id?: number,
  title: string;
  description: string;
  questions: Questions[];
}

export interface Questions{
    id: number;
    text: string;
    answer: Answer[];
}

export interface Answer{
    id: number;
    text: string;
    isTrue: boolean;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

   idTest: number = 0;
   numberQuestion = 0;
   test: Test;
   isFinish: boolean;
   countAnswerIsTrue = 0;
   isAnswer: boolean;
   //questions: Questions[];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idTest = params.id;
      console.log('Id', this.idTest)
    })
     this.http.get<Test>(`http://localhost:50098/api/tests/get/${this.idTest}`)
    .subscribe(tests => {
      this.test = tests;
      //this.questions = tests.questions
      console.log('Response', this.test)
      console.log('Response', tests.questions)
      console.log('Length', this.test.questions.length)


    })
  }

  nextQuestion() {
    if(this.numberQuestion != this.test.questions.length)
    {
      this.numberQuestion+=1;
      if(this.isAnswer) {
        this.countAnswerIsTrue +=1;
      }
    }

     if(this.numberQuestion == this.test.questions.length)
    {
      this.isFinish = true;
      console.log('countAnswerIsTrue=', this.countAnswerIsTrue)
    }
  }

  goToTests() {
   this.router.navigate(['/tests'])

  }
  isAnswerTrue(ans: boolean) {
    this.isAnswer = ans;

  }

}
