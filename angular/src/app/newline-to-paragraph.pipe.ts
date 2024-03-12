import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newlineToParagraph',
  standalone: true
})
export class NewlineToParagraphPipe implements PipeTransform {

  transform(value: string): string {
    const source = value.split('\n')
    const result: string[] = source.map(text => {
      return `<p>${text}</p>`
    })
    return result.join('');
  }
}
