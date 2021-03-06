import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ExperiencesService {

  constructor(public fb: AngularFirestore) { }

  getExperiences() {
    return this.fb.collection('experiences', ref => {
      return ref.orderBy('startDate', 'desc');
    }).snapshotChanges();
  }
}
