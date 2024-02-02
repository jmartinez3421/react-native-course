import "react-native-gesture-handler";

import React from "react";
import { StackNavigator } from "./src/navigation/StackNavigator";
import { ThemeProvider } from "./src/contexts/themeContext/ThemeContext";

const AppState = ({ children }: { children: React.ReactNode }) => <ThemeProvider>{children}</ThemeProvider>;

export default function App() {
    return (
        <AppState>
            <StackNavigator />
        </AppState>
    );
}
