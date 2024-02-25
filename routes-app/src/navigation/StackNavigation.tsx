import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PermissionsScreen } from "@/screens/PermissionsScreen";
import { MapScreen } from "@/screens/MapScreen";

export type RootStackParamList = {
    Privileges: undefined;
    Map: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: "#fff" },
        }}
        initialRouteName="Privileges"
    >
        <Stack.Screen name="Privileges" component={PermissionsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
);
