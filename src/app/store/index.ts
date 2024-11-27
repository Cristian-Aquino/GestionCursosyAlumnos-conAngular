import { ActionReducerMap } from "@ngrx/store";
import { contadorReducer, CounterState } from "./reducers/contador.reducer";
import { authFeatureName, authReducer, AuthState } from "./reducers/auth.reducer";

interface RootState{
    [authFeatureName]: AuthState;
}
const RootReducer: ActionReducerMap<RootState> = {
    [authFeatureName]: authReducer
};


export { RootReducer }