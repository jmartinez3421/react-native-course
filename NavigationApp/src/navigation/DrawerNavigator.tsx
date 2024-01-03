import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StackNavigator } from "./StackNavigator";
import { SettingsScreen } from "../screens/DrawerScreens/SettingsScreen.tsx";
import { useWindowDimensions } from "react-native";
import { DrawerContent } from "../components/DrawerContent.tsx";
import { BottomTabNavigator } from "./BottomTabNavigator.tsx";

export type RootDrawerParams = {
    Tabs: undefined;
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
            <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
    );
};
