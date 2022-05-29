import USER_ACTION_TYPES from "./user.types";

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};

/*

  [1]

  The first step is to initialize the user's state, and then create the action and export the code to the root reducer.

  The default state is usually same state. 

*/
