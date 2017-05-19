import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
@Component({
  selector: 'proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css']
})
export class ProposalListComponent {//implements OnInit {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 
    'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 
    150, 120, 15, 'jordan@devcamp.com')
  proposalTwo: Proposal = new Proposal(99, 'Abc Comp7any', 
    'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 
    150, 120, 15, 'jordan@devcamp.com')
  proposalThree: Proposal = new Proposal(185, 'Abc Com76pany', 
    'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 
    150, 120, 15, 'jordan@devcamp.com')
  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
  //constructor() { }

 // ngOnInit() {
 // }

}
