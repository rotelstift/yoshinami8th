import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleReaderComponent } from './article-reader/article-reader.component';

export const routes: Routes = [
  { path: '', component: ArticleReaderComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'article-edit', component: ArticleEditorComponent }
];
