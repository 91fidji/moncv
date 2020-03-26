import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../experiences/experiences.service';
import { TrainingsService} from '../trainings/trainings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experiences;
  trainings;
  formations;

  constructor(
    public experiencesService: ExperiencesService,
    public trainingsService: TrainingsService,
    ) { }

  ngOnInit() {
    this.getExperiences();
    this.getTrainings();
  }

  getExperiences() {
    this.experiencesService.getExperiences().subscribe(result => {
      this.experiences = result;
    });
  }

  getTrainings() {
    this.trainingsService.getTrainings().subscribe(result => {
      this.trainings = result;
    });

  }
}
