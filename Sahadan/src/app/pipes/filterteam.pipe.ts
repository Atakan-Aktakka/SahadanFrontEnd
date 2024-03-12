import { Pipe, PipeTransform } from '@angular/core';
import { Team } from '../models/Team/team';

@Pipe({
  name: 'filterteam'
})
export class FilterteamPipe implements PipeTransform {

  transform(value: Team[], filterText: string): Team[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((l:Team)=>l.teamName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
