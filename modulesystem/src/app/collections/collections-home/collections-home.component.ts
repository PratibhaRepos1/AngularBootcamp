import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  constructor() { }

  data = [
    {name: 'John', age: 23, job: 'Designer', employed: true },
    {name: 'Peter', age: 43, job: 'Manager', employed: true},
    {name: 'Steve', age: 28, job: 'HR', employed: true},
    {name: 'Killy', age: 33, job: 'Designer', employed: false}
  ];

  headers = [
    {key: 'employed', label: 'Has a Job?'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'}
  ];

  ngOnInit(): void {
  }

}
