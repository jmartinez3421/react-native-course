import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "@/screens/PokemonScreen";
import { useStyles } from "react-native-unistyles";
import { SearchScreen } from "@/screens/SearchScreen";
import { RootStackParamList } from "@/navigation/NavigationParams";

const Stack = createStackNavigator<RootStackParamList>();

export const SearchScreenNavigation = () => {
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
            <Stack.Screen name="HomeScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
};
