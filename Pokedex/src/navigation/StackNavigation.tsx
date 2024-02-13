import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "@/screens/PokemonScreen";
import { useStyles } from "react-native-unistyles";
import { HomeScreen } from "@/screens/HomeScreen";
import { SimplePokemon } from "@/types/pokemon.types";

export type RootStackParamList = {
    HomeScreen: undefined;
    PokemonScreen: {
        simplePokemon: SimplePokemon;
        color: string;
    };
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
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
