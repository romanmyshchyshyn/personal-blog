import { Component, OnInit } from '@angular/core';
import { faSpinner, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.createPostForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      image: ['', Validators.required]
    });
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
