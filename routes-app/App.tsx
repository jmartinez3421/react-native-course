import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "@/navigation/StackNavigation";
import { StatusBar } from "react-native";
import { PermissionsProvider } from "@/contexts/PermissionContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <NavigationContainer>
        <PermissionsProvider>{children}</PermissionsProvider>
    </NavigationContainer>
);

export default function App() {
    return (
        <AppProviders>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
            <StackNavigation />
        </AppProviders>
    );
}
