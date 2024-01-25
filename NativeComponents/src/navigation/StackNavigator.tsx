import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { Animation101Screen } from "../Screens/Animation101Screen";
import { Animation102Screen } from "../Screens/Animation102Screen";

export type RootStackParams = {
    HomeScreen: undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
            <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        </Stack.Navigator>
    );
};
