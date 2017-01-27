import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})
export class MemberListComponent implements OnInit {

  constructor (private router: Router, private memberService: MemberService){}
    members: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    ngOnInit() {
      this.members = this.memberService.getMembers();
    }

    goToDetailPage(clickedMember) {
      this.router.navigate(['member-detail', clickedMember.$key]);
    }

    filterByShow: string = "allShows";

    onChange(optionFromMenu) {
      this.filterByShow = optionFromMenu;
    }

}
