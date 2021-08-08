import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

export interface Test{
  id?: number,
  title: string;
  description: string;
  questuions: Questuions;
}

export interface Questuions{
    id: number;
    text: string;
    answers: Answer;
}

export interface Answer{
    id: number;
    text: string;
    isTrue: boolean;
}

@Injectable({providedIn: 'root'})
export class TestService {
   constructor(private http: HttpClient) {}

   getTest(id: number){
        this.http.get<Test>(`http://localhost:50098/api/tests/get/{number}`)
    .subscribe(tests => {
      console.log('Response', tests)

    })
   }
}