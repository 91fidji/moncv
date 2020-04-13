import { Component, OnInit } from '@angular/core';
import { TrainingsService} from './trainings.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
trainings;

  displayedColumns: string[] = ['nom', 'school', 'location'];

  addTrainingForm = new FormGroup({
    nom: new FormControl(''),
    school: new FormControl(''),
    location: new FormControl('')
  });

  constructor(
    public ts: TrainingsService,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.getTrainings();
    this.addTrainingForm = this.fb.group({
      nom : new FormControl(''),
      school : new FormControl(''),
      location : new FormControl('')
    });
  }

  getTrainings() {
    this.ts.getTrainings().subscribe(
      result => {
        this.trainings = result;
      });
  }

  onSubmit(data: any) {
    this.ts.createTraining(data);
  }
}
