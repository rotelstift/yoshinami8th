import { Component } from '@angular/core';
import { TagService, Tag} from '../tag.service';
import { CommonModule, KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-tag-editor',
  standalone: true,
  imports: [
    CommonModule,
    KeyValuePipe
  ],
  templateUrl: './tag-editor.component.html',
  styleUrl: './tag-editor.component.css'
})
export class TagEditorComponent {
  tags: Tag[] = []
  errors: any[] = []

  constructor(private tagService: TagService) {  }

  ngOnInit(): void {
    this.tagService.getAllTags().subscribe({
      next: (response) => {
        console.log(response)
        this.tags = response
      },
      error: (error) => console.error(error),
      complete: () => console.log('complete')
    })
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const form_data = new FormData(form)

    this.tagService.postTag(form_data).subscribe({
      next: (response) => {
        this.tagService.getAllTags().subscribe({
          next: (response) => {
            this.tags = response
          }
        })
      },
      error: (errors) => { 
        this.errors = errors['error']
      },
      complete: () => {  }
    })
  }
}
