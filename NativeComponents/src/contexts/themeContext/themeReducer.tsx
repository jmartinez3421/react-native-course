import { Theme } from "@react-navigation/native";

type ThemeAction = { type: "set_light_theme" } | { type: "set_dark_theme" };

export interface ThemeState extends Theme {
    currentTheme: "light" | "dark";
    dividerColor: string;
    primaryDark: string;
}

export const lightTheme: ThemeState = {
    currentTheme: "light",
    dark: false,
    dividerColor: "rgba(0,0,0,0.7)",
    primaryDark: "#002E3D",
    colors: {
        primary: "#00b5ff",
        background: "white",
        card: "#F3F3F3",
        text: "#303030",
        border: "black",
        notification: "teal",
    },
};

const darkTheme: ThemeState = {
    currentTheme: "dark",
    dark: true,
    dividerColor: "rgba(255,255,255,0.7)",
    primaryDark: "#7A1FA2",
    colors: {
        primary: "#AF33B8",
        background: "#303030",
        card: "#4B4B4B",
        text: "white",
        border: "white",
        notification: "teal",
    },
};

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
    switch (action.type) {
        case "set_light_theme":
            return { ...lightTheme };
        case "set_dark_theme":
            return { ...darkTheme };
        default:
            return state;
    }
};
