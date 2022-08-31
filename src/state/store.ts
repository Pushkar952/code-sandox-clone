import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { ActionType } from './action-types';
export const store = createStore(reducer, {}, applyMiddleware(thunk));
store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: null,
        type: 'code'
    }
});
 

store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: null,
        type: 'text'
    }
});
store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: null,
        type: 'text'
    }
});
store.dispatch({
    type: ActionType.INSERT_CELL_BEFORE,
    payload: {
        id: null,
        type: 'code'
    }
});

