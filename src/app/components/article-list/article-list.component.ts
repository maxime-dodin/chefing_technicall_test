import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  Article:any = [];

  constructor(private apiService: ApiService) {
    this.readArticle();
  }

  ngOnInit(): void {
  }
  readArticle(){
    this.apiService.getArticles().subscribe((data) => {
     this.Article = data;
    })
  }

  removeArticle(article, index) {
    if (window.confirm('Are you sure?')) {
        this.apiService.deleteArticle(article._id).subscribe((data) => {
          this.Article.splice(index, 1);
        }
      )
    }
  }
}
