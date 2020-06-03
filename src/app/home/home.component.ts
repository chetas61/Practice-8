import { Component, OnInit } from '@angular/core';
import { AddpostService } from '../addpost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public post=[];
  constructor(private add:AddpostService) { }

  ngOnInit(): void {
    this.post = this.add.post();
  }
  title = 'Let\'s Blog';
  name = "ABC";
  counter = 0;
  onClick(){
    this.counter+=1;
  }
  onRem(){
    this.counter=  0;
  }
}
