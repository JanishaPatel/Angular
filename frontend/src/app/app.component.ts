// // import { Component, OnInit } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { FormControl, FormGroup, Validators } from '@angular/forms';
// // import { ApicallService } from './shared/apicall.service';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css'],
// // })
// // export class AppComponent implements OnInit {
// //   title = 'frontend';
// //   // file: any;
// //   // photo: any;
// //   file: File | null = null;
// //   // fileupload!: FormGroup;
// //   constructor(private http: HttpClient, public apiCallService: ApicallService) {
// //     // this.fileupload = new FormGroup<any>({
// //     //   photo: new FormControl(null, [Validators.required]),
// //     // });
// //   }
// //   ngOnInit(): void {}
// //   register($event: any | null): void {
// //     console.log('hello');
// //   }
// //   onFileSelected(event: any): void {
// //     this.file = event.target.files[0];
// //   }
// //   async uploadFile(): Promise<void> {
// //     if (!this.file) {
// //       return;
// //     }
// //   }
// //   const formData = new FormData();
// //     formData.append('file', this.file);

// //     return this.http.post('http://localhost:4000/upload', data);
// // }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements OnInit {
//   file: File | null = null;

//   constructor(private http: HttpClient) {}

//   onFileSelected(event: any): void {
//     console.log(event);

//     this.file = event.target.files[0].name;
//     console.log(this.file);
//   }

//   uploadFile(): void {
//     if (!this.file) {
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', this.file);
//     console.log('Again', this.file);

//     this.http.post<any>('http://localhost:4000/upload', this.file).subscribe(
//       (response) => {
//         console.log(response.message);
//       },
//       (error) => {
//         console.error('error', error);
//       }
//     );
//   }

//   ngOnInit(): void {}
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  photos: any;
  imageDirectoryPath: any = 'http://localhost:4000/uploads/';
  // fileArr: string[] = [];
  fileArr: any;
  myForm = new FormGroup({
    file: new FormControl(),
  });

  constructor(private http: HttpClient) {}

  onFileChange(e: any) {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      this.photos = file;
      this.fileArr.push(this.photos);
      console.log('======>', this.fileArr);
    }
  }

  uploadImage() {
    const formData = new FormData();
    formData.append('file', this.fileArr[0]);

    this.http
      .post('http://localhost:4000/upload', formData)
      .subscribe((res) => {
        console.log(res);
        alert('Product Added SuccessFully...');
      });
    // this.displayImage();
  }

  show() {
    this.http.get('http://localhost:4000/preview').subscribe((res) => {
      console.log('image id', res);
      // if(res.url_id)
    });
  }
  ngOnInit(): void {}
}
