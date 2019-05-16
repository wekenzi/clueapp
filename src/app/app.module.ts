import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BarRatingModule } from "ngx-bar-rating";

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthguardGuard } from "./guard/authguard.guard";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,RouterModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,BarRatingModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
