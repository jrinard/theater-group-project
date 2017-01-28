import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2'


@Injectable()
export class MemberService {
    members: FirebaseListObservable<any[]>;

constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }


  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('/members/' + memberId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      firstName: localUpdatedMember.firstName,
      lastName: localUpdatedMember.lastName,
      phone: localUpdatedMember.phone,
      email: localUpdatedMember.email,
      address: localUpdatedMember.address,
      birthdate: localUpdatedMember.birthdate,
      gender: localUpdatedMember.gender,
      show: localUpdatedMember.show});
  }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}
