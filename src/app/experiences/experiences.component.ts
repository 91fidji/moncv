import { Component, OnInit } from '@angular/core';
import { ExperiencesService } from './experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
experiences;

  displayedColumns: string[] = ['employer', 'actions'];

  constructor(public experiencesService: ExperiencesService ) { }

  ngOnInit() {
    this.getExperiences();
  }

  getExperiences() {
    this.experiencesService.getExperiences().subscribe(
      result => {
        this.experiences = result;
      });
  }

}
