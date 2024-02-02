import React from "react";
import { lightTheme, themeReducer, ThemeState } from "./themeReducer";
import { useColorScheme } from "react-native";

type ThemeContextType = {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
};

const initialTheme: ThemeContextType = {
    theme: lightTheme,
    setDarkTheme: () => {},
    setLightTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextType>(initialTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const colorScheme = useColorScheme();

    const [theme, dispatch] = React.useReducer(themeReducer, lightTheme);

    const setDarkTheme = () => {
        dispatch({ type: "set_dark_theme" });
    };

    const setLightTheme = () => {
        dispatch({ type: "set_light_theme" });
    };

    React.useEffect(() => {
        if (colorScheme === "dark") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }, [colorScheme]);

    return (
        <ThemeContext.Provider
            value={{
                theme: theme,
                setDarkTheme,
                setLightTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return React.useContext(ThemeContext);
};
