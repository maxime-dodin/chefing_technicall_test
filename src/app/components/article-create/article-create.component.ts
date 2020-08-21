import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})
export class ArticleCreateComponent implements OnInit {
  submitted = false;
  articleForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }
  mainForm() {
    this.articleForm = this.fb.group({
      name: ['', [Validators.required]],
      amount: [Validators.required],
      price: [Validators.required],
    })
  }
  updateProfile(e) {
    this.articleForm.get('designation').setValue(e, {
      onlySelf: true
    })
  }

  get myForm() {
    return this.articleForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.articleForm.valid) {
      return false;
    } else {
      this.apiService.createArticle(this.articleForm.value).subscribe(
        (res) => {
          console.log('Articles successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/article-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }
}
