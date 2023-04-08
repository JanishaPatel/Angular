import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import axios from 'axios';
// import FormData from 'form-data';
// import * as fs from '@angular/fs';
// var fs = require('fs');

// suno filee sysyem inbuilt nahi
@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  constructor(private http: HttpClient) {}
  uploadPhoto(photo: any) {
    // const formData = new FormData();
    // formData.append('file', this.file);

    // return this.http.post('http://localhost:4000/upload', data);
  }
}
