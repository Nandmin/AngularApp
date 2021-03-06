import { createAction, props } from "@ngrx/store";
import { User } from 'src/app/model/user';

export const getItems = createAction('[User] get items');

export const loadItems = createAction('[User] load items', 
    props<{items: User[]}>()
);

export const errorItem = createAction('[User] error item', 
    props<{message: string}>()
);