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
    return this.angularFire.database.object('/members/' + memberId);// firebase is searching for us
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);// finds album by id
    memberEntryInFirebase.update({//updating album.value
      firstName: localUpdatedMember.firstName,
      lastName: localUpdatedMember.lastName,
      phone: localUpdatedMember.phone,
      email: localUpdatedMember.email,
      address: localUpdatedMember.address,
      birthdate: localUpdatedMember.birthdate,
      gender: localUpdatedMember.gender,
      show: localUpdatedMember.show,
      eduClass: localUpdatedMember.eduClass});
  }

  // fundMember(localUpdatedMember, amountInputed){
  //   var albumEntryInFirebase = this.getMemberById(localUpdatedMember.$key);// finds album by id
  //   localUpdatedMember.moneyraised = parseInt(localUpdatedMember.moneyraised) + parseInt(amountInputed);
  //   albumEntryInFirebase.update({//updating album.value
  //     name: localUpdatedMember.name,
  //     details: localUpdatedMember.details,
  //     manager: localUpdatedMember.manager,
  //     goal: localUpdatedMember.goal,
  //     moneyraised: localUpdatedMember.moneyraised,
  //     reward: localUpdatedMember.reward,
  //     type: localUpdatedMember.type});
  // }

  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}
