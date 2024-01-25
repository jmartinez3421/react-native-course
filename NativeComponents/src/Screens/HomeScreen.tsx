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
        ],
        []
    );

    return (
        <View style={styles.container}>
            <MenuList menuItems={menuItems} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: ExpoConstants.statusBarHeight,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
});
