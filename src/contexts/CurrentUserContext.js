import { createContext } from "react";

const CurrentUserContext = createContext({
  currentUser: {},
  isLoggedIn: false,
  handleLogin: (email, password) => {},
  handleRegister: () => {},
  handleLogout: () => {},
  updateUser: (username, avatar) => {},
});

export default CurrentUserContext;
