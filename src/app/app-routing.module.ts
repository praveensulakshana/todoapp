import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdditemComponent } from './components/additem/additem.component';
import { EdititemComponent } from './components/edititem/edititem.component';
import { ItemsComponent } from './components/items/items.component';
import { ViewitemComponent } from './components/viewitem/viewitem.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'additem',
    component: AdditemComponent,
  },
  {
    path: 'edititem/:id',
    component: EdititemComponent,
  },
  {
    path: 'itemdashboard',
    component: ItemsComponent,
  },
  {
    path: 'item/:id',
    component: ViewitemComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
