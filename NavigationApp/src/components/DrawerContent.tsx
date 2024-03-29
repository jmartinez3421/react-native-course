import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentComponentProps, DrawerContentScrollView } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends DrawerContentComponentProps {}

const Avatar = () => (
    <View style={styles.headerContainer}>
        <Image
            src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
            style={styles.avatar}
        />
    </View>
);

const Menu = ({ navigation }: Props) => (
    <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Tabs")} style={styles.menuButton}>
            <Text>
                <Icon name="map" size={20} color="#303030" />
            </Text>
            <Text style={styles.menuButtonText}>Stack Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")} style={styles.menuButton}>
            <Text>
                <Icon name="settings" size={20} color="#303030" />
            </Text>
            <Text style={styles.menuButtonText}>Settings</Text>
        </TouchableOpacity>
    </View>
);

export const DrawerContent = (props: Props) => {
    return (
        <DrawerContentScrollView>
            <Avatar />
            <Menu {...props} />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 100,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
        rowGap: 20,
    },
    menuButton: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
    },
    menuButtonText: {
        fontSize: 20,
        color: "#303030",
        alignItems: "center",
    },
});
