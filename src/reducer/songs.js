import _ from "lodash";

import * as actionTypes from "../action/Types";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.TOP_SONGS:
      return {
        ...state,
        [action.payload]: action.payload,
      };
    default:
      return state;
  }
};
