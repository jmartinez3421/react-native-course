import React from "react";
import { StyleSheet, View } from "react-native";
import ExpoConstants from "expo-constants";
import { MenuList, MenuListOptions } from "../components/MenuList";

export const HomeScreen = () => {
    const menuItems = React.useMemo<MenuListOptions[]>(() => [
        {
            name: "Animations",
            icon: "cube-outline",
            screen: "AnimationsScreen",
        },
        {
            name: "Animations",
            icon: "cube-outline",
            screen: "AnimationsScreen",
        }
    ], []);

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
