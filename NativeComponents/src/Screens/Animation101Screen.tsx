import React from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useAnimation } from "../hooks/useAnimation";
import { StyledButton } from "../components/StyledButton";

export const Animation101Screen = () => {
    const { opacity, position, fadeInMoving, fadeOutMoving } = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{ ...styles.box, opacity, transform: [{ translateY: position }] }} />

            <StyledButton onPress={() => fadeInMoving(-100, 0)} label="FadeIn" />
            <StyledButton onPress={() => fadeOutMoving(0, -100)} label="FadeOut" />
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
});
