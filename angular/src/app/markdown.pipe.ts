import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'markdown',
  standalone: true
})
export class MarkdownPipe implements PipeTransform {

  constructor() {
    marked.use({async: true})
  }

  transform(raw_markdown: string) {
    return new Promise<string>((resolve, _reject) => {
      resolve(marked.parse(raw_markdown))
    })
  }
}
