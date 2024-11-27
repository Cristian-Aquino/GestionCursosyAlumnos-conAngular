import { createReducer } from "@ngrx/store";

export interface CounterState {
    valor: number;
}

const estadoInicial: CounterState = {
    valor: 0,
}

export const contadorReducer = createReducer(estadoInicial)