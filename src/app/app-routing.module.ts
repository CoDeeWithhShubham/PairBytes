import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostStartComponent } from './component/post-start/post-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  {
    path: 'posts', component:PostListComponent,children:[
      {path:'', component:PostStartComponent},
      {path:':id', component:PostDetailsComponent},
    
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
