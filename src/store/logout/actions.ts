import { AuthActionTypes } from "./types";
import { action } from "typesafe-actions";

export const LogOut = () => action(AuthActionTypes.AUTH_LOGOUT);
// export const LogIn = () => action(AuthActionTypes.AUTH_LOGIN)
