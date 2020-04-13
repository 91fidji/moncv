import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../experiences/experiences.service';
import { TrainingsService} from '../trainings/trainings.service';
import { ProductionsService } from '../services/productions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  experiences;
  trainings;
  formations;
  productions;

  constructor(
    public experiencesService: ExperiencesService,
    public trainingsService: TrainingsService,
    public productionsService: ProductionsService,
    ) { }

  ngOnInit() {
    this.getExperiences();
    this.getTrainings();
    this.getProductions();
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

  getProductions() {
    this.productionsService.getProductions().subscribe(result => {
      this.productions = result;
    });
  }
}
