import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Let\'s Blog';
  counter = 0;
  onClick(){
    this.counter+=1;
  }
  onRem(){
    this.counter=  0;
  }
}
