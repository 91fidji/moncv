import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.guard';
import { ExperiencesComponent } from './experiences/experiences.component';


export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard] 
  }, 
  {
    path:'experiences',
    component: ExperiencesComponent
  }
  
]