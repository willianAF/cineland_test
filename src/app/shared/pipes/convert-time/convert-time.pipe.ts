import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTime'
})
export class ConvertTimePipe implements PipeTransform {

  transform(runtime: number): string | undefined {
        const hours = Math.floor(runtime/60);
        const minutes = Math.floor(runtime%60);
        let time;

        if(!runtime)
          return ;

        minutes < 10 ? time = `(${hours}h0${minutes}m)` : time = `(${hours}h${minutes}m)`

        return time;
  }

}

