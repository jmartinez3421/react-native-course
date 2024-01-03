import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/SettingsScreen.tsx";
import { useWindowDimensions } from "react-native";
import { DrawerContent } from "../components/DrawerContent.tsx";

export type RootDrawerParams = {
    StackNavigator: undefined;
    Settings: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const DrawerNavigator = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerType: width > 768 ? "permanent" : "slide" }}
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};
