import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-link',
  standalone: true,
  imports: [],
  templateUrl: './admin-link.component.html',
  styleUrl: './admin-link.component.css'
})
export class AdminLinkComponent {
  @Input() id: number | string = ''

  path: string | null = null

  constructor() {}

  ngOnInit() {
    this.path = `/article-edit/${this.id}`
  }
}
