import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Hire } from 'src/app/models/hire.model';


@Injectable({
  providedIn: 'root'
})
export class HireService {


  constructor(private firestore: AngularFirestore) { }

  /* Create Hire */
  public createHire(hire: Hire) {
    return this.firestore.collection('hires').add(hire);
  }


}
