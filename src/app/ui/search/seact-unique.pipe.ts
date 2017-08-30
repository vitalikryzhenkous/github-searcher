import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'searchUnique',
  pure: false
})

export class SearcgUniquePipe implements PipeTransform {
    transform(value: any): any {
        if ( value !== undefined && value !== null) {
            return _.uniqBy(value, 'language');
        }
        return value;
    }
}
