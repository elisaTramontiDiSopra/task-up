import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { ToastrService } from "ngx-toastr";

@Injectable()
export class UserService {
  userRef;
  userCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore, private toaster: ToastrService) {
    this.userCollection = this.afs.collection('users');
  }

  createUser(user) {
    return this.userCollection.doc(user.uid).set(user);
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
