import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appTheme } from "../theme/AppTheme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";

export interface MenuListOptions {
    name: string;
    icon: keyof typeof Ionicons.glyphMap;
    screen: string;
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

const MenuListHeader = () => <Text style={[appTheme.title, styles.title]}>Menu options</Text>;

const ItemSeparator = () => <View style={styles.separator} />;

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
    title: {
        marginBottom: 15,
    },
    separator: {
        borderBottomWidth: 1,
        opacity: 0.4,
        marginVertical: 10,
        borderBottomColor: "purple",
    },
});
