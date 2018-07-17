import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// ngrx
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {reducers} from './app.reducers';

import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {TodoComponent} from './todo/todo.component';
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';
import {TodoAddComponent} from './todo/todo-add/todo-add.component';
import {TodoItemComponent} from './todo/todo-item/todo-item.component';
import {TodosListComponent} from './todo/todos-list/todos-list.component';


import {ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TodoComponent,
    TodoFooterComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodosListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
