import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { addPost } from '../state/posts.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
})
export class AddpostComponent implements OnInit {
  postForm!: FormGroup;
  title: String = '';
  description: String = '';
  constructor(private store: Store<AppState>, private router: Router) {}
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }
  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm.valid) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description is required';
      }
      if (descriptionForm?.errors?.['minlength']) {
        return 'Description shoould be of minimum 10 characters length';
      }
    }
    return;
  }

  onAddPost() {
    // console.log('in');

    if (!this.postForm.valid) {
      return;
    }
    console.log(this.postForm.value);
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    };
    this.store.dispatch(addPost({ post }));
    this.router.navigate(['posts']);
  }
}
