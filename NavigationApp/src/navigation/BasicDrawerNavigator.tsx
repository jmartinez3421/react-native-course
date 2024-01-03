import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/SettingsScreen.tsx";
import { useWindowDimensions } from "react-native";

export type RootDrawerParams = {
    StackNavigator: undefined;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const BasicDrawerNavigator = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerType: width > 768 ? "permanent" : "slide" }}>
            <Drawer.Screen name="StackNavigator" options={{ title: "Home" }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: "Settings" }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
};
