import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../models/posts/post_model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title : string;
  @Input() img : any;
  @Input() content : string;

  constructor() {
  }

  ngOnInit() {
  }

}
