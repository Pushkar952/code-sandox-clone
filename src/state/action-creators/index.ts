import { Dispatch } from "react";
import { ActionType } from "../action-types";
import {
    UpdateCellAction, MoveCellAction,
    DeleteCellAction, InsertCellAfterAction,
    Direction,
    Action
} from "../actions";
import { CellTypes } from "../cell";
import bundle from "../../bundler";

export const updateCell = (id:string, content:string): UpdateCellAction => { 
    return {
        type: ActionType.UPDATE_CELL,
        payload: {
            id: id,
            content: content
        }
    }

};
export const deleteCell = (id:string): DeleteCellAction => {
    return {
        type: ActionType.DELETE_CELL,
        payload: id
    }
};
 
export const moveCell = (id:string, direction:Direction): MoveCellAction => { 
    return {
        type: ActionType.MOVE_CELL,
        payload: {
            id: id,
            direction: direction
        }
    }
};
export const insertCellAfter = (id:string| null, type:CellTypes): InsertCellAfterAction => { 
    return {
        type: ActionType.INSERT_CELL_AFTER,
        payload: {
            id: id,
            type: type
        }
    }
};

export const createBundle = (cellId: string, input: string) => { 
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BUNDLE_START,
            payload: {
                cellId: cellId
            }
        });
        const result = await bundle(input);
        dispatch({
            type: ActionType.BUNDLE_COMPLETE,
            payload: {
                cellId: cellId,
                bundle: {
                    code: result.code,
                    err: result.err
                }
            }
        });
    }
}