import { Article } from './../../../model/article';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from './../../service/api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  submitted = false;
  editForm: FormGroup;
  articleData: Article[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateArticle();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getArticle(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: [Validators.required],
      price: [Validators.required],
    })
  }
  updateProfile(e) {
    this.editForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm() {
    return this.editForm.controls;
  }

  getArticle(id) {
    this.apiService.getArticle(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        amount: data['amount'],
        price: data['price'],
      });
    });
  }

  updateArticle() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: [Validators.required],
      price: [Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.apiService.updateArticle(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('/article-list');
            console.log('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }
}
