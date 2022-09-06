import { combineReducers } from 'redux';
import CellReducer from './cellsReducer';
import BundlesReducer from './bundlesReducers';


const reducer = combineReducers({
    cells: CellReducer,
    bundles: BundlesReducer
});
export default reducer;

export type RootState = ReturnType<typeof reducer>;