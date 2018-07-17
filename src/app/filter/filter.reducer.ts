import * as fromFiltros from './filter.action';


const estadoInicial: fromFiltros.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: fromFiltros.acciones): fromFiltros.filtrosValidos {

  switch (action.type) {
    case fromFiltros.SET_FILTRO:
      return action.filtro;

    default:
      return state;
  }

}
