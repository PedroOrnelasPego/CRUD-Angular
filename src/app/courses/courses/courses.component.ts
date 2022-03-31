import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: 1, name: 'Angular', category: 'front-end', tempo: '40h'},
    {_id: 2, name: 'React', category: 'front-end', tempo: '50h'},
    {_id: 3, name: 'Java', category: 'back-end', tempo: '90h'}
  ];
  displayedColumns = ['name', 'category', 'tempo'];

  constructor() { }

  ngOnInit(): void {
  }

}
