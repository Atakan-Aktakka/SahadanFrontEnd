import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/Player/player';

@Pipe({
  name: 'filterplayer'
})
export class FilterplayerPipe implements PipeTransform {

  transform(value: Player[], filterText: string): Player[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((l:Player)=>l.playerName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
