import { Component } from '@angular/core';
import { TagService, Tag} from '../tag.service';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { lastValueFrom } from 'rxjs';

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

  deleteTag(id: number): void {
    lastValueFrom(this.tagService.deleteTag(String(id)))
      .then(_r => {
        return lastValueFrom(this.tagService.getAllTags())
      })
      .then(response => {
        this.tags = response
      })
      .catch(error => {
        console.error(error)
      })
  }

  onSubmit(event: Event): void {
    event.preventDefault()
    const form = event.target as HTMLFormElement
    const form_data = new FormData(form)

    lastValueFrom(this.tagService.postTag(form_data))
      .then(_r => {
        return lastValueFrom(this.tagService.getAllTags())
      })
      .then(response => {
        this.tags = response
        form.reset()
      })
      .catch(error => {
        this.errors = error['error']
      })
  }
}
