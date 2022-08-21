// import {USER_ACTION_TYPE} from "./user-types";
// export const INITIAL_STATE = { currentUser: null };

// export const userReducer = (state = INITIAL_STATE, action={}) => {
//   const { type, payload } = action;

//   console.log(`user reducer type `);
//   console.log(type)
//   console.log(`user reducer payload `);
//   console.log(payload)

//   switch (type) {
//     case USER_ACTION_TYPE.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };

//     default:
//       return state;
//   }
// };
import {USER_ACTION_TYPE} from './user-types';

export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log(action)

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      return state;
  }
};
