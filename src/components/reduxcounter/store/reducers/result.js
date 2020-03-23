import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./../../utility";
import shortid from 'shortid';
const initialState = {
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE:
      return updateObject(state, {
        results: state.results.concat({ id: shortid.generate(), value: action.result })
      });
    case actionTypes.DOUBLESTORE:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.resultDouble * 2
        })
      });
    case actionTypes.TRIPLESTORE:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.resultTriple * 3
        })
      });
    case actionTypes.DELETE:
      const updatedArray = state.results.filter(
        result => result.id !== action.resultsId
      );
      return {
        ...state,
        results: updatedArray
      };
  }
  return state;
};
export default reducer;
