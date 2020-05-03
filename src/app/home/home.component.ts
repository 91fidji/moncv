import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from '../experiences/experiences.service';
import { TrainingsService} from '../trainings/trainings.service';
import { ProductionsService } from '../services/productions.service';
import { FormGroup, FormControlName, EmailValidator, FormBuilder, Validators } from '@angular/forms';



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

  sendEmailForm: FormGroup;
  email: string;

  constructor(
    public experiencesService: ExperiencesService,
    public trainingsService: TrainingsService,
    public productionsService: ProductionsService,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.getExperiences();
    this.getTrainings();
    this.getProductions();
    this.createForm();
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
      console.log(this.productions.id);

    });
  }

  createForm() {
    this.sendEmailForm = this.fb.group({
      email: ['', Validators.email],
      nom:  [''],
      message: [''],
    });
  }

  addEndDate(experience) {
    console.log('exerience', experience);
  }
}
