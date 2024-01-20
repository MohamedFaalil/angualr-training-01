import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'covertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform{
  transform(value: any, character: string): string {
    return value.replace(character, "\t");
  }

}
