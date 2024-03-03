import { Pipe, PipeTransform } from '@angular/core';
import { Legue } from '../models/Legue/legue';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Legue[], filterText: string): Legue[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((l:Legue)=>l.legueName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
