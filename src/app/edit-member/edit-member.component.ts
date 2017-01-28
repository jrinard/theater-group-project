import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingThisMember(memberToBeChanged){
    this.memberService.updateMember(memberToBeChanged);
  }

  beginDeletingMember(memberToBeDeleted){
    if (confirm("Are You Sure You Want to delete THIS member permanently??")){
      this.memberService.deleteMember(memberToBeDeleted);
    }
  }
}
