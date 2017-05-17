import { Component, OnInit } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {//implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: 'my first doc',
      description: 'dsssdsd',
      file_url: 'http://google.com',
      updated_at:'11/11/17',
      image_url:'http://google.com'
    },
    {
      title: 'my first doc',
      description: 'dsssdsd',
      file_url: 'http://google.com',
      updated_at:'11/11/17',
      image_url:'http://google.com'
    },
    {
      title: 'my first doc',
      description: 'dsssdsd',
      file_url: 'http://google.com',
      updated_at:'11/11/17',
      image_url:'http://google.com'
    }
  ];
  //constructor() { }

  //ngOnInit() {
  //}

}
