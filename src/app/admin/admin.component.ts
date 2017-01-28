import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(firstName: string,lastName: string,phone: string,email: string,address: string,birthdate: string, gender: string,show: string){
               var newMember: Member = new Member(firstName,lastName,phone,email,address,birthdate,gender,show);
                 this.memberService.addMember(newMember);
             }

}
