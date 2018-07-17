import {Todo} from './todo/model/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFiltrosAction from './filter/filter.action';

export interface AppState {
  todos: Todo[];
  filtro: fromFiltrosAction.filtrosValidos;
}


export const reducers: ActionReducerMap<AppState> = {

  todos: fromTodo.todoReducer,
  filtro: fromFilter.filtroReducer,

};
