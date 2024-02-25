import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "@/screens/PokemonScreen";
import { useStyles } from "react-native-unistyles";
import { HomeScreen } from "@/screens/HomeScreen";
import { RootStackParamList } from "@/navigation/NavigationParams";

const Stack = createStackNavigator<RootStackParamList>();

export const ListScreenNavigation = () => {
    const { theme } = useStyles();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: theme.colors.background,
                },
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};
