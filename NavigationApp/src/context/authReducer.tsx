import { AuthState } from "./AuthContext.tsx";

export enum AuthActionType {
    signIn,
    logout,
    changeFavoriteIcon,
}

export type AuthAction =
    | { type: AuthActionType.signIn; payload?: string }
    | { type: AuthActionType.logout }
    | { type: AuthActionType.changeFavoriteIcon; payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionType.signIn:
            return {
                ...state,
                isLogged: true,
                userName: action.payload,
            };
        case AuthActionType.logout:
            return {
                ...state,
                isLogged: false,
                userName: undefined,
                favoriteIcon: undefined,
            };
        case AuthActionType.changeFavoriteIcon:
            return {
                ...state,
                favoriteIcon: action.payload,
            };
        default:
            return state;
    }
};
