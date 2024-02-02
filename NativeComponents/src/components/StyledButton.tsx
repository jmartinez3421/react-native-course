import { Text, TouchableOpacity, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
    onPress: () => void;
    label: string;
    icon?: keyof typeof Ionicons.glyphMap;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
};

export const StyledButton = ({ onPress, label, icon, containerStyle, disabled }: Props) => (
    <View style={containerStyle}>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={styles.button}>
                <Text style={styles.text}>{label}</Text>
                {icon && <Ionicons name={icon} size={24} color="white" />}
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});
