import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songName'
})
export class SongNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == "" || undefined || null) return value;
    const response = value.filter((item) => item.title.toLowerCase().includes(args.toLowerCase()));
    return response;
  }

}
