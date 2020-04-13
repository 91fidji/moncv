import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Experience } from '../models/experience/experience.module';

import { Router } from '@angular/router';
import { ExperiencesService } from '../services/experiences.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  experiences: Experience[];
  experiencesSubscription: Subscription;

  constructor(private experiencesService: ExperiencesService, private router: Router) { }

  ngOnInit(): void {
    this.experiencesSubscription = this.experiencesService.experiencesSubject.subscribe(
      (experiences: Experience[]) => {
        this.experiences = experiences;
      }
    );
    this.experiencesService.emitExperiences();
  }

  onNewExperience() {
    this.router.navigate(['/experiences', 'new']);
  }

  onDeleteExperience(experience: Experience) {
    this.experiencesService.removeExperience(experience);
  }

  onViewExperience(id: number) {
    this.router.navigate(['/experiences', 'view', id]);
  }

  ngDestroy() {
    this.experiencesSubscription.unsubscribe();
  }

}
