import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesService } from './services/features.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AddFeatureComponent } from './add-feature/add-feature.component';
import { ModalAlertComponent } from './layout/modal-alert/modal-alert.component';
import { ListFeatureComponent } from './features/list-feature/list-feature.component';
import { CardFeatureComponent } from './features/list-feature/card-feature/card-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    FeaturesComponent,
    LoginComponent,
    OhFourComponent,
    OneFeatureComponent,
    DetailFeatureComponent,
    SignupComponent,
    AddFeatureComponent,
    ModalAlertComponent,
    ListFeatureComponent,
    CardFeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FeaturesService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
