import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';


const routes: Routes = [
  {path: '', component:PostListComponent},
  {path:'post', component:PostItemComponent},
  {path:'authentification', component:AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }