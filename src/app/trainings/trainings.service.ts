import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable()
export class TrainingsService {

  constructor(public fb: AngularFirestore) { }

  getTrainings(){
    return this.fb.collection('trainings').snapshotChanges();
  }
}