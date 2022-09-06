import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
// helper hook for useDispatch

export const useActions = () => { 
    const dispatch = useDispatch();
    return useMemo(() => {
        return bindActionCreators(actionCreators, dispatch);
    }, [dispatch]);
};