import {Component, OnInit} from '@angular/core';
import * as fromFiltros from '../../filter/filter.action';
import {AppState} from '../../app.reducers';
import {Store} from '@ngrx/store';
import {Todo} from '../model/todo.model';
import {BorrarTAllTodoAction} from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: fromFiltros.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltros.filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro;
    });
  }

  cambiarFiltro(nuevoFiltro: fromFiltros.filtrosValidos) {

    const accion = new fromFiltros.SetFIltroAction(nuevoFiltro);
    this.store.dispatch(accion);
  }

  contarPendientes(todos: Todo[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  borrarTodos() {
    const accion = new BorrarTAllTodoAction();
    this.store.dispatch(accion);
  }
}
