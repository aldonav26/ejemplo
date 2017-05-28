import {Injectable} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseObjectFactoryOpts} from 'angularfire2/interfaces';
import { Cliente } from '../cliente';

@Injectable()
export class AfClienteService {
  public clientes: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  public user: FirebaseObjectObservable<any>;

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = this.af.database.object('clientes/' + auth.uid);
        }
      });

    this.clientes = this.af.database.list('clientes');
    this.clientes.subscribe(clientes => console.log(clientes));
    this.users = this.af.database.list('users');
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }

  /**
   *
   */
  addUserInfo() {
    //We saved their auth info now save the rest to the db.
    this.users.push({
      email: this.email,
      displayName: this.displayName
    });
  }

  /**
   * Saves a message to the Firebase Realtime Database
   * @param text
   */
  create(cliente: Cliente) {
    var newCliente = {
      cc: cliente.cc,
      name: cliente.name,
      adress: cliente.adress,
      phone: cliente.phone,
      email: cliente.email
    };
    this.clientes.push(newCliente);
  }

  delete(cliente): void {
    this.af.database.object('clientes/' + cliente.$key).remove();
  }

  update(cliente): void {
   this.af.database.object('clientes/' + cliente.$key).update({
      "cc": cliente.cc,
      "name": cliente.name,
      "adress": cliente.adress,
      "phone": cliente.phone,
      "email": cliente.email
    });
  }

  /**
   *
   * @param model
   * @returns {firebase.Promise<void>}
   */
  registerUser(email, password) {
    console.log(email);
    return this.af.auth.createUser({
      email: email,
      password: password
    });
  }

  /**
   *
   * @param uid
   * @param model
   * @returns {firebase.Promise<void>}
   */
  saveUserInfoFromForm(uid, displayName, email) {
    return this.af.database.object('registeredUsers/' + uid).set({
      displayName: displayName,
      email: email,
    });
  }

  /**
   * Logs the user in using their Email/Password combo
   * @param email
   * @param password
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }
}