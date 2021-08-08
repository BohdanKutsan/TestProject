import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface Test{
  id?: number,
  title: string;
  description: string;
  isDescription: boolean;
  isAgree: boolean;
}

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  tests: Test[] = []

  constructor(private http: HttpClient, private router: Router) { 
  
  }

  ngOnInit(): void {
    this.http.get<Test[]>(`http://localhost:50098/api/tests/gettests`)
    .subscribe(tests => {
      this.tests = tests
      console.log('Response', this.tests)

    })
  }

  goToTest(id: number) {
    console.log('id=', id)
   this.router.navigate(['/tests/', id])

  }

}
