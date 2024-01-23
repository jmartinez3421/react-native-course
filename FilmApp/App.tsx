import "react-native-gesture-handler";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigation/StackNavigator.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GradientProvider } from "./src/contexts/GradientContext.tsx";

const queryClient = new QueryClient();

const AppProviders = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        <GradientProvider>{children}</GradientProvider>
    </QueryClientProvider>
);

const App = () => {
    return (
        <AppProviders>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </AppProviders>
    );
};

export default App;
