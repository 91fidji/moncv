import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductionsService {

  constructor(private db: AngularFirestore) { }

  getProductions() {
    return this.db.collection('realisations').snapshotChanges();
  }

  addProduction(website) {
    return this.db.collection('realisations').add({
      name: website.name,
      url: website.url,
      websiteName: website.websiteName,
    });
  }
}
