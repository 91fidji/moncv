import { Injectable } from '@angular/core';
import { Experience } from '../models/experience/experience.module';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  experiences: Experience[] = [];

  experiencesSubject = new Subject<Experience[]>();

  emitExperiences() {
    this.experiencesSubject.next(this.experiences);
  }

  saveExperiences() {
    firebase.database().ref('/experiences').set(this.experiences);
  }

  getExperiences() {
    firebase.database().ref('/experiences')
      .on('value', (data: DataSnapshot) => {
        this.experiences = data.val() ? data.val() : [];
        this.emitExperiences();
      });
  }

  getSingleExperience(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/experiences' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewExperience(newExperience: Experience) {
    this.experiences.push(newExperience);
    this.saveExperiences();
    this.emitExperiences();
  }

  removeExperience(experience: Experience) {
    const experienceIndexToRemove = this.experiences.findIndex(
      (exp) => {
        if (exp === experience) {
            return true;
        }
      }
    );
    this.experiences.splice(experienceIndexToRemove, 1);
    this.saveExperiences();
    this.emitExperiences();
  }

  constructor() {
    this.getExperiences();
  }
}
