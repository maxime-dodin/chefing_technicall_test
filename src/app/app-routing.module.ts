import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-article' },
  { path: 'create-article', component: ArticleCreateComponent },
  { path: 'edit-article/:id', component: ArticleEditComponent },
  { path: 'article-list', component: ArticleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }