import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthguardGuard } from "./guard/authguard.guard";


const routes: Routes = [
  {path:"" , redirectTo:"/landingpage" , pathMatch:"full"},
  {path:"landingpage" , component:LandingPageComponent},
  {path:"login" , component:LoginComponent},
  {path:"signup" , component:SignUpComponent},
  {path:"products" , component:ProductsComponent ,canActivate: [AuthguardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
