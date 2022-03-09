import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import { errorItem, loadItems } from './userActions';

// átalakítjuk majd a store-ban elhelyezzük és a 
// selectorok által elérhetővé tesszük az adatokat

export interface State {
    users: {
        items: User[],
        error: string
    }
}

export const initialState: State = {
    users: {
        items: [],
        error: ''
    }
};


export const userReducer = createReducer(
    initialState,
    // on: eseményfigyel. Ha () megtörténik a loaditems action, akkor...
    // eltárolja az adatokat a state-ben items néven
    on(loadItems, (state, action) => ({
        ...state,
        items: action.items
    })),
    on(errorItem, (state, action) => ({
        ...state,
        items: action.message
    })),
);

// hogy az adatokat megkapjuk, kell a selector
export const selectItems = (state: State) => state.users.items;
export const selectError = (state: State) => state.users.error;
