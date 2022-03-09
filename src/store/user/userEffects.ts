import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { loadItems, getItems } from './userActions';
import { UserService } from '../../app/service/user.service';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from "rxjs";


@Injectable()

export class userEffect{
    // ezek a változók fogják figyelni az eseményeket
    // kapcsolatot teremt az action és a service között
    // ofType: meg tudom adni, hogy az actions közül melyiknél fusson le
    loadItems$ = this.actions$.pipe(
        ofType(getItems),
        // ha teljesül, akkor
        switchMap( () => this.userService.get()),
        // ha ez is megvan, akkor az action formátumára hozom az adatokat
        switchMap( users => of({type: '[User] load items', items: users})),
        catchError( error => of({type: '[User] error item', message: error}))
    );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ){}
}