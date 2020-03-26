import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class TrainingsService {

  constructor(public db: AngularFirestore) { }

  getTrainings() {
    return this.db.collection('formations', ref => {
      return ref.orderBy('startDate', 'desc');
    }).snapshotChanges();
  }

  createTraining(trainingData) {
    return this.db.collection('formations').add({
      nom: trainingData.nom,
      school : trainingData.school,
      location : trainingData.location
    });
  }
}
