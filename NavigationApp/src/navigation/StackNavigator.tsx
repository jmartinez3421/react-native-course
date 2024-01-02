import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Page3Screen } from "../screens/Page3Screen.tsx";
import { Page2Screen } from "../screens/Page2Screen.tsx";
import { Page1Screen } from "../screens/Page1Screen.tsx";
import { PersonScreen } from "../screens/PersonScreen.tsx";

export type RootStackParams = {
    Page1Screen: undefined;
    Page2Screen: undefined;
    Page3Screen: undefined;
    PersonScreen: { id: number; name: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => (
    <Stack.Navigator
        initialRouteName="Page1Screen"
        screenOptions={{
            cardStyle: {
                backgroundColor: "white",
            },
            headerStyle: {
                elevation: 0,
                shadowColor: "transparent",
            },
            headerBackTitle: "Back",
        }}
    >
        <Stack.Screen name="Page1Screen" options={{ title: "Page 1" }} component={Page1Screen} />
        <Stack.Screen name="Page2Screen" options={{ title: "Page 2" }} component={Page2Screen} />
        <Stack.Screen name="Page3Screen" options={{ title: "Page 3" }} component={Page3Screen} />
        <Stack.Screen name="PersonScreen" options={{ title: "Person" }} component={PersonScreen} />
    </Stack.Navigator>
);
