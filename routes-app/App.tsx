import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "@/navigation/StackNavigation";
import { StatusBar } from "react-native";
import { PermissionsProvider } from "@/contexts/PermissionContext";
import { LocationProvider } from "@/contexts/LocationContext";

const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <NavigationContainer>
        <PermissionsProvider>
            <LocationProvider>{children}</LocationProvider>
        </PermissionsProvider>
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
