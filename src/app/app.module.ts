import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthGuard } from './core/auth.guard';
import { AuthService } from './core/auth.service';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { RouterModule } from '@angular/router';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from '@angular/material/table';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ExperiencesService } from './experiences/experiences.service';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingsService } from './trainings/trainings.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ExperienceListComponent } from './experience-list/experience-list.component';
import { SingleExperienceComponent } from './experience-list/single-experience/single-experience.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ExperienceFormComponent } from './experience-list/experience-form/experience-form.component';
import { TopbarComponent } from './main-menu/topbar/topbar.component';

@NgModule({
  imports:      [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
/*       { path: 'experiences', component: ExperienceListComponent },
 */      { path: 'trainings', component: TrainingsComponent },
      { path: 'auth/signup', component: SignupComponent },
      { path: 'auth/signin', component: SigninComponent },
      { path: 'experiences', canActivate: [AuthGuardService], component: ExperienceListComponent },
      { path: 'experiences/new', canActivate: [AuthGuardService], component: ExperienceFormComponent },
      { path: 'experiences/view/:id', canActivate: [AuthGuardService],  component: SingleExperienceComponent},
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '**', redirectTo: '/' }
    ]),
    AngularFireModule.initializeApp(environment.firebase)
 ],
  declarations: [
    AppComponent,
    HelloComponent,
    MainMenuComponent,
    ExperiencesComponent,
    HomeComponent,
    TrainingsComponent,
    SigninComponent,
    SignupComponent,
    ExperienceListComponent,
    SingleExperienceComponent,
    ExperienceFormComponent,
    TopbarComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, AuthGuard, ExperiencesService, TrainingsService, AuthGuardService],
})
export class AppModule { }
