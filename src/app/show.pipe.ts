import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'show',
  pure: false
})
export class ShowPipe implements PipeTransform {

  transform(input: Member[], desiredShow) {
    var output: Member[] = [];
    if (desiredShow === "BeautyAndTheBeast") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].show === "BeautyAndTheBeast") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredShow === "JamesAndTheGiantPeach") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].show === "JamesAndTheGiantPeach") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredShow === "TheLittleMermaid") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].show === "TheLittleMermaid") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;//return array of all objects
    }
  }

}
