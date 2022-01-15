import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(value: any, searchValue: string): any {
    if (!searchValue) {
      return value;
    }
    return value.data.filter(
      (v) => v.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    );
  }
}
