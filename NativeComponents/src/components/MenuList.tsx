import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appTheme } from "../theme/AppTheme";

export interface MenuListOptions {
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
    screen: string;
}

interface Props {
    menuItems: MenuListOptions[];
}

const MenuListItem = ({ menuItem }: { menuItem: MenuListOptions }) => {
    return (
        <View>
            <Text style={styles.itemText}>{menuItem.name} - <Ionicons name={menuItem.icon} size={20} /></Text>
        </View>
    );
};

const MenuListHeader = () => (
    <Text style={[appTheme.title, styles.title]}>Menu options</Text>
);

const ItemSeparator = () => (
    <View style={styles.separator} />
);

export const MenuList = ({ menuItems }: Props) => {
    return (
        <FlatList
            data={menuItems}
            renderItem={({ item }) => <MenuListItem menuItem={item} />}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={() => <MenuListHeader />}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {

    },
    itemText: {
        fontSize: 20,
    },
    title: {
        marginBottom: 15,
    },
    separator: {
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 10,
        borderBottomColor: "black",
    }
});
