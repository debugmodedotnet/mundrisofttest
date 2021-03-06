import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'catalogfilter'
})
export class CatalogfilterPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if (!args)
      return value;
    return value.filter(
      item => (item.course_info.level.toLowerCase().indexOf(args.toLowerCase()) >-1) 
            || (item.course_name.toLowerCase().indexOf(args.toLowerCase()) > -1)
            || (item.brief_description.toLowerCase().indexOf(args.toLowerCase()) > -1)
    );

  }
}
