import { combineReducers } from 'redux';
import CellReducer from './cellsReducer';


const reducer = combineReducers({
    cells: CellReducer
});
export default reducer;

export type RootState = ReturnType<typeof reducer>;