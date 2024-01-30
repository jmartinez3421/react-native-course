import React from "react";
import { View } from "react-native";
import { MenuList } from "../components/MenuList";
import { HOME_MENU_DATA } from "../data/HomeMenuData";

export const HomeScreen = () => {
    return (
        <View>
            <MenuList menuItems={HOME_MENU_DATA} />
        </View>
    );
};
