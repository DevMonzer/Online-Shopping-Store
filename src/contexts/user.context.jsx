import { createContext, useReducer, useEffect } from "react";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

// Initialize the userReducer function
const userReducer = (state, action) => {
  const { type, payload } = action;
  console.log(action);

  switch (type) {
    case "SET_CURRENT_USER":
      return { currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

// The initial state of the user
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // Dispatch the userReducer function using useReducer
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_CURRENT_USER", payload: user });
  };

  // const [currentUser, setCurrentUser] = useState(null);

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*

    useReducer is widly used with complex state

*/
