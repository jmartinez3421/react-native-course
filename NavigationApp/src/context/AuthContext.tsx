import React from "react";
import { AuthActionType, authReducer } from "./authReducer.tsx";

export interface AuthState {
    isLogged: boolean;
    userName?: string;
    favoriteIcon?: string;
}

const initialState: AuthState = {
    isLogged: false,
    userName: undefined,
    favoriteIcon: undefined,
};

export interface AuthContextProps {
    authState: AuthState;
    signIn: (username?: string) => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
}

export const AuthContext = React.createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [authState, dispatch] = React.useReducer(authReducer , initialState);

    const signIn = (username?: string) => {
        dispatch({ type: AuthActionType.signIn, payload: username });
    }

    const logout = () => {
        dispatch({ type: AuthActionType.logout });
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: AuthActionType.changeFavoriteIcon, payload: iconName });
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => React.useContext(AuthContext);
