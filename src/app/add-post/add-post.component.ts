import { Component, OnInit } from '@angular/core';
import { AddpostService } from '../addpost.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  public post = [];
  constructor(private add:AddpostService) { }

  ngOnInit(): void {
    this.post = this.add.post();
  }

}
