import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen.tsx";
import { DetailScreen } from "../screens/DetailScreen.tsx";
import { Movie } from "../types/Movies.ts";

export type RootStackParams = {
    Home: undefined;
    Detail: { movie: Movie };
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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};
