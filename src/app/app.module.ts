import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './about/about.component';
import { AddcovComponent } from './addcov/addcov.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplaycovComponent } from './displaycov/displaycov.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { OAuthModule } from "angular-oauth2-oidc";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginRegisterComponent } from './auth/login-register/login-register.component';
import { ProfileAuthComponent } from './auth/profile-auth/profile-auth.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ResetComponent } from './auth/reset/reset.component';
import { EditCovComponent } from './edit-cov/edit-cov.component';
import { ProfileComponent } from './profile/profile.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    NavComponent,
    DisplaycovComponent,
    AddcovComponent,
    AboutComponent,
    FooterComponent,
    ProfileComponent,
    LoginRegisterComponent,
    ResetComponent,
    ResetPasswordComponent,
    ProfileAuthComponent,
    EditCovComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    OAuthModule.forRoot(),
    GoogleMapsModule,
    CommonModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MatDialogModule


  ], exports: [
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
