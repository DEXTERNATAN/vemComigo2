import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable()

export class UserService {

    // colecction
    private _userCollection: AngularFirestoreCollection<User>;

    // Observables
    users: Observable<User[]>;
    countItems: number;

    constructor(private _af: AngularFirestore) {
        this._userCollection = _af.collection<User>('items', x => x.orderBy('name', 'asc'));
    }

    getUsers() {
        this.users = this._userCollection.snapshotChanges().pipe(
            map(actions => {
                this.countItems = actions.length;
                return actions.map(action => ({
                    $key: action.payload.doc.id,
                    ...action.payload.doc.data()
                }));
            })
        );

        return this.users;
    }

    createUsers(user: any): any {
        console.log('dados: ', user);

        return this._userCollection.add(user).then(data => {
            console.log('Documento cadastrado com sucesso!');
        }).catch(error => {
            console.error('Erro ao cadastrar o usuário: ', error);
        });

    }

    deleteUsers(key) {
        return this._userCollection.doc(key).delete().then(data => {
            console.log('Documento deletado com sucesso!');
        }).catch(error => {
            console.error('Erro ao remover o documento: ', error);
        });
    }

}
