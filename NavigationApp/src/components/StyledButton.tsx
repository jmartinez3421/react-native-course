import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    sx?: StyleProp<ViewStyle>;
};

export const StyledButton = ({ title, onPress, disabled, sx }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.button, sx]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#5856D6",
        borderRadius: 10,
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
});
