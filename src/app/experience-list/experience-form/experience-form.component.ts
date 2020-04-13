import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ExperiencesService } from '../../services/experiences.service';
import { Router } from '@angular/router';
import { Experience } from '../../models/experience/experience.module';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder, private experiencesService: ExperiencesService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.experienceForm = this.fb.group({
      title: ['', Validators.required],
      employer: ['', Validators.required]
    });
  }

  onSaveExperience() {
    const title = this.experienceForm.get('title').value;
    const employer = this.experienceForm.get('employer').value;

    const experience = new Experience(title, employer);
    this.experiencesService.createNewExperience(experience);
    this.router.navigate(['/experiences']);
  }

}
