import React from "react";
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { icons } from "lucide-react-native";
import { Icon } from "@/components/layout/Icon";

interface Props {
    icon: keyof typeof icons;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const FAB = ({ icon, onPress, style }: Props) => {
    return (
        <View style={[styles.btnContainer, style]}>
            <TouchableOpacity onPress={onPress} style={styles.btn}>
                <Icon name={icon} size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        zIndex: 1,
        position: "absolute",
        height: 50,
        width: 50,
        borderRadius: 30,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0.25,
            height: 4.5,
        },
        shadowRadius: 5,
        elevation: 5,
        overflow: "hidden",
    },
    btn: {
        backgroundColor: "#303030",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
});
