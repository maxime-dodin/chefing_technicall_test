import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
    RouterModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

