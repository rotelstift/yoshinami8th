import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

export const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'article-edit', component: ArticleEditorComponent }
];
