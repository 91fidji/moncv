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
      { path: 'experiences', component: ExperiencesComponent },
      { path: 'trainings', component: TrainingsComponent }
    ]),
    AngularFireModule.initializeApp(environment.firebase)
 ],
  declarations: [ AppComponent, HelloComponent, MainMenuComponent, ExperiencesComponent, HomeComponent, TrainingsComponent],
  bootstrap:    [ AppComponent ],
  providers: [ AuthService, AuthGuard, ExperiencesService, TrainingsService],
})
export class AppModule { }
