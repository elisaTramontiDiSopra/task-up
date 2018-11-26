import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class UserService {
  uid;
  userCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private toaster: ToastrService) {
    this.userCollection = this.afs.collection('users');
    this.uid = this.getUid();
  }

  createUser(user) {
    return this.userCollection.doc(user.uid).set(user);
  }

  updateUser(uid, key, value) {
    return this.userCollection.doc(uid).update({
      [key]: value
    })
  }

  getUser(uid) {
    return this.userCollection.doc(uid).get()
  }

  deleteUser(uid) {
    return this.userCollection.doc(uid).delete();
  }

  getUid() {
    if (localStorage.getItem("uid")) {
      let tempUid = localStorage.getItem("uid");
      return tempUid.slice(1, -1);
    }
  }

  /* updateCustomer(key: string, value: any): void {
    this.userRef
      .update(key, value)
      .catch(err => this.toaster.error(err));
  }

  deleteCustomer(key: string): void {
    this.userRef
      .remove(key)
      .catch(err => this.toaster.error(err));
  }

  getCustomersList(): AngularFireList<any> {
    return this.userRef;
  }

  deleteAll(): void {
    this.userRef
      .remove()
      .catch(err => this.toaster.error(err));
  } */
}
