import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsListComponent } from './post-details-list.component';

describe('PostDetailsListComponent', () => {
  let component: PostDetailsListComponent;
  let fixture: ComponentFixture<PostDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
