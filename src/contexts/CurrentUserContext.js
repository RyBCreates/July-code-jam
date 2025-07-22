import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
  handleLogin: () => {},
  handleRegister: () => {},
  handleLogout: () => {},
});

export default CurrentUserContext;
