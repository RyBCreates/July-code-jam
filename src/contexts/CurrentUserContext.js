import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
  handleLogin: (email, password) => {},
  handleRegister: () => {},
  handleLogout: () => {},
});

export default CurrentUserContext;
