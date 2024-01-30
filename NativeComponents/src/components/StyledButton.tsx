import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React from "react";

type Props = {
    onPress: () => void;
    label: string;
};

export const StyledButton = ({ onPress, label }: Props) => (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.text}>{label}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});
