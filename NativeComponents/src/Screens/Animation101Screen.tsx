import React from "react";
import { Animated, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useAnimation } from "../hooks/useAnimation";

export const Animation101Screen = () => {
    const { opacity, position, fadeInMoving, fadeOutMoving } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.box, opacity, transform: [{ translateY: position }] }} />

            <TouchableOpacity onPress={() => fadeInMoving(-100, 0)}>
                <View style={styles.button}>
                    <Text style={styles.text}>FadeIn</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fadeOutMoving(0, -100)}>
                <View style={styles.button}>
                    <Text style={styles.text}>FadeOut</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 20,
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: "royalblue",
        borderRadius: 20,
    },
    button: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
    },
});
