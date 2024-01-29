import React from "react";
import { StyleSheet, View } from "react-native";
import ExpoConstants from "expo-constants";
import { MenuList, MenuListOptions } from "../components/MenuList";

export const HomeScreen = () => {
    const menuItems = React.useMemo<MenuListOptions[]>(
        () => [
            {
                name: "Animation 101",
                icon: "cube-outline",
                screen: "Animation101Screen",
            },
            {
                name: "Animation 102",
                icon: "move-outline",
                screen: "Animation102Screen",
            },
            {
                name: "Switch",
                icon: "toggle-outline",
                screen: "SwitchScreen",
            },
            {
                name: "Alerts",
                icon: "alert-circle-outline",
                screen: "AlertScreen",
            },
            {
                name: "Text inputs",
                icon: "text-outline",
                screen: "TextInputScreen",
            },
            {
                name: "Pull to refresh",
                icon: "refresh-outline",
                screen: "PullToRefreshScreen",
            },
            {
                name: "Section list",
                icon: "list-outline",
                screen: "SectionListScreen",
            },
        ],
        []
    );

    return (
        <View>
            <MenuList menuItems={menuItems} />
        </View>
    );
};
