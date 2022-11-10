import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private fs: AngularFirestore) {}

  getAllUsers() {
    return this.fs.collection('users').stateChanges();
  }
}
