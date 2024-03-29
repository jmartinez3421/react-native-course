import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import "@/unistyles/unistyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomTabNavigation } from "@/navigation/BottomTabNavigation";
import { StatusBar } from "react-native";

const queryClient = new QueryClient();

const AppState = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>{children}</NavigationContainer>
    </QueryClientProvider>
);

const App = () => (
    <AppState>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <BottomTabNavigation />
    </AppState>
);

export default App;
