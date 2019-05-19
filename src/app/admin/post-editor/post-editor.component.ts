import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { faFolderOpen, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.css']
})
export class PostEditorComponent implements OnInit, OnChanges {

  postForm: FormGroup;

  previewTitle: string = "Title";
  previewDescription: string = "Description";
  previewPostedOn: Date = new Date();

  faSpinner = faSpinner;
  faFolderOpen = faFolderOpen;

  @Input()
  loading: boolean;

  @Input()
  failed: boolean;

  base64textStringImage: string = "";
  imageSchema: string = "data:image/jpeg;charset=utf-8;base64, ";
  safeImageUrl: SafeUrl;

  @Input()
  editorTitle: string;

  @Input()
  post: Post;

  @Output()
  submitted = new EventEmitter<Post>();

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      content: ['', Validators.required],
      image: ['']
    });
  }

  onSubmit() {
    const post: Post = {
      id: this.post ? this.post.id : null,
      title: this.postForm.get('title').value,
      description: this.postForm.get('description').value,
      postedOn: this.post ? this.post.postedOn : new Date(),
      content: this.postForm.get('content').value,
      image: this.base64textStringImage
    };
    
    this.submitted.emit(post);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const postChangeProperty = changes["post"];
    if (postChangeProperty && !postChangeProperty.isFirstChange()) {
      this.postForm.patchValue({
        title: postChangeProperty.currentValue.title,
        description: postChangeProperty.currentValue.description,
        content: postChangeProperty.currentValue.content        
      });

      this.previewPostedOn = postChangeProperty.currentValue.postedOn;
      this.setImageProperties(postChangeProperty.currentValue.image);
    }
  }

  private setImageProperties(base64textString: string) {
    this.base64textStringImage = base64textString;
    this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(base64textString);
  }

  handleFileSelect(evt) {
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
    this.setImageProperties(this.imageSchema + btoa(binaryString));    
  }
}
