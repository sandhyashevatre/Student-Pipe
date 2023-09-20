import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student';
Students: any = [
  {
    Sid: 1,
    Sname: 'Sandhya Shevatre',
    dob: '2001-05-15',
    course: 'Computer Science',
    fees: 2000
  },
  {
    Sid: 2,
    Sname: 'Rucha Chavan',
    dob: '2003-08-25',
    course: 'Electrical Engineering',
    fees: 2500
  },
  {
    Sid: 3,
    Sname: 'Srima Kar',
    dob: '2002-04-10',
    course: 'Mechanical Engineering',
    fees: 2200
  },
  {
    Sid: 4,
    Sname: 'Alekya Roa',
    dob: '2001-12-05',
    course: 'Physics',
    fees: 1800
  }
];
}
