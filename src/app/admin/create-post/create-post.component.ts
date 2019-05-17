import { Component, OnInit } from '@angular/core';
import { faSpinner, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PostService } from '../post.service';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  createPostForm: FormGroup;

  previewTitle: string = "Title";
  previewDescription: string = "Description";
  previewPostedOn: Date = new Date();

  faSpinner = faSpinner;
  faFolderOpen = faFolderOpen;

  loading = false;
  failed: boolean;

  base64textString: string = "";
  imageSchema: string = "data:image/jpeg;charset=utf-8;base64, ";
  safeUrl: SafeUrl;

  constructor(
    private fb: FormBuilder, 
    private sanitizer: DomSanitizer,
    private postService: PostService,
    private auth: AuthService,
    private router: Router,) 
    { }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onSubmit() {
    this.failed = false;
    this.loading = true;

    const post: Post = {
      id: null,
      title: this.createPostForm.get('title').value,
      description: this.createPostForm.get('description').value,
      postedOn: new Date(),
      content: this.createPostForm.get('content').value,
      image: this.base64textString
    };

    this.postService.add(post).subscribe(
      (data) => {
        this.router.navigate([this.auth.redirectUrl || '/']);
      },
      (error) => {
        console.log(error);
        this.failed = true;
        this.loading = false;
      }
    );
  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
           this.base64textString = this.imageSchema + btoa(binaryString);
           this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.base64textString);
   }

}
