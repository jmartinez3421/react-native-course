import 'react-native-gesture-handler';

import React from "react";
import { StackNavigation } from "@/navigation/StackNavigation";

import { NavigationContainer } from "@react-navigation/native";
import "@/unistyles/unistyles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const AppState = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <NavigationContainer>
            {children}
        </NavigationContainer>
    </QueryClientProvider>
)

const App = () => (
    <AppState>
        <StackNavigation />
    </AppState>
);

export default App;
