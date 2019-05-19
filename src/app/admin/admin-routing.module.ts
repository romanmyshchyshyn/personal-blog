import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { CanDeactivateGuard } from '../shared/guards/candeactivate.guard';

const routes: Routes = [
  {
    path: 'post-create',
    component: PostCreateComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent,
    canDeactivate: [CanDeactivateGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }