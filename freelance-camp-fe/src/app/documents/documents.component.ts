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
      image_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495275430562&di=0a07dd08589fa9f358753136c0310652&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F293%2F2FC145978D5W.jpg'
    },
    {
      title: 'my first doc',
      description: 'dsssdsd',
      file_url: 'http://google.com',
      updated_at:'11/11/17',
      image_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495275430562&di=0a07dd08589fa9f358753136c0310652&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F293%2F2FC145978D5W.jpg'
    },
    {
      title: 'my first doc',
      description: 'dsssdsd',
      file_url: 'http://google.com',
      updated_at:'11/11/17',
      image_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495275430562&di=0a07dd08589fa9f358753136c0310652&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2011%2F293%2F2FC145978D5W.jpg'
    }
  ];
  //constructor() { }

  //ngOnInit() {
  //}

}
