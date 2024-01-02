import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
};

export const StyledButton = ({ title, onPress, disabled }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
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
