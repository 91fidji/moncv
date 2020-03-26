import { Component, OnInit } from '@angular/core';
import { TrainingsService} from './trainings.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
trainings;
  constructor(public ts: TrainingsService) { }

  ngOnInit() {
    this.getTrainings();
  }

  getTrainings() {
    this.ts.getTrainings().subscribe(
      result => {
        this.trainings = result;
      });
  }

}
