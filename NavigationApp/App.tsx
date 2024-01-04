import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./src/navigation/DrawerNavigator.tsx";
import { AuthProvider } from "./src/context/AuthContext.tsx";

const AppState = ({ children }: { children: React.ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
}

const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <DrawerNavigator />
            </AppState>
        </NavigationContainer>
    );
};

export default App;
