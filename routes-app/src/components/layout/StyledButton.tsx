import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface StyledButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
}

export const StyledButton = ({ title, onPress, disabled }: StyledButtonProps) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress} disabled={disabled}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    button: {
        backgroundColor: "#303030",
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "500",
    },
});
