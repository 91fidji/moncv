import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class ExperiencesService {

  constructor(public fb: AngularFirestore) { }

  getExperiences(){
    return this.fb.collection('experiences').snapshotChanges();
  }
}