import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFeatureComponent } from './detail-feature/detail-feature.component';
import { FeaturesComponent } from './features/features.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OhFourComponent } from './oh-four/oh-four.component';
import { OneFeatureComponent } from './one-feature/one-feature.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', canActivate : [AuthGuardGuard] ,component: LayoutComponent, children : [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home',  component: HomeComponent},  
    { path: 'features', component: FeaturesComponent},
    { path: 'features/:id', component: OneFeatureComponent},
    { path: 'not-found', component: OhFourComponent},
    { path:'**', redirectTo:'/not-found'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
