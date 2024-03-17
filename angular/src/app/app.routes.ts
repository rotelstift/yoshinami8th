import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TagEditorComponent } from './tag-editor/tag-editor.component';
import { InformationComponent } from './information/information.component';

export const routes: Routes = [
  { path: '', component: ArticleReaderComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'article-edit/:entityStatus', component: ArticleEditorComponent },
  { path: 'article-edit', redirectTo: '/article-edit/new', pathMatch: 'full' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'info', component: InformationComponent },
  { path: 'tags', component: TagEditorComponent }
];
