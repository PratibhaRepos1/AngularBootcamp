import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Why is the sky blue?', content: 'It is a universal magic created by god!'},
    {title: 'How to dream?', content: 'Deep sleep and imagine more!'},
    {title: 'Where is the Sun?', content: 'Look at the east side of sky!'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
