import * as actions from "../actions/initialCallConstant";

const items = [];

const initialCallReducer = (state = items, action) => {
  switch (action.type) {
    case actions.INITIATIAL_CALL_EVENT:
      return [...state, ...action.data];
    default:
      return state;
  }
};

export default initialCallReducer;
