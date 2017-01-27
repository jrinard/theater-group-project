import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(members: any, term: any):any {
    if (term === undefined) return members;
    return members.filter(function(member){
      if (member.firstName.toLowerCase().includes(term.toLowerCase()) ||
          member.lastName.toLowerCase().includes(term.toLowerCase())||
          member.show.toLowerCase().includes(term.toLowerCase())
    ) {
        return member;
      }
    })
  }

}
