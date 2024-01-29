import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";
import { HeaderTitle } from "./HeaderTitle";

export interface MenuListOptions {
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
    screen: keyof RootStackParams;
}

interface Props {
    menuItems: MenuListOptions[];
}

const MenuListItem = ({ menuItem }: { menuItem: MenuListOptions }) => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate(menuItem.screen as any)}>
            <View style={styles.itemContainer}>
                <View style={styles.rowFlex}>
                    <Ionicons name={menuItem.icon} size={20} color="purple" />
                    <Text style={styles.itemText}>{menuItem.name}</Text>
                </View>
                <Text>
                    <Ionicons name="chevron-forward-outline" size={20} />
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export const ItemSeparator = () => <View style={styles.separator} />;

export const MenuList = ({ menuItems }: Props) => {
    return (
        <FlatList
            data={menuItems}
            renderItem={({ item }) => <MenuListItem menuItem={item} />}
            keyExtractor={(item) => item.name}
            ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
            ItemSeparatorComponent={() => <ItemSeparator />}
        />
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    rowFlex: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
    },
    itemText: {
        fontSize: 20,
    },
    separator: {
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 10,
        borderBottomColor: "purple",
    },
});
