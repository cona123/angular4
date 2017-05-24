import { Component, OnInit } from '@angular/core';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Rx';
import { ProposalService } from './proposal.service';
@Component({
  selector: 'proposal-new',
  templateUrl: './proposal-new.component.html',
  styleUrls: ['./proposal-new.component.css']
})
export class ProposalNewComponent {//implements OnInit {
  proposal = new Proposal;
  submitted: boolean= false;
  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal)
        .subscribe(
          data => { return true },
          error => {
            console.log("Error saving proposal111");
            return Observable.throw(error);
          }
        );
  }

}
