import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// @ts-ignore
import Pokeball from "@/assets/pokeball.png";

export const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={[styles.title, { marginTop: insets.top }]}>Pokedex</Text>
            <Image source={Pokeball} style={styles.pokeball} />
        </View>
    )
}

const stylesheet = createStyleSheet( (theme) => ({
    pokeball: {
        position: "absolute",
        width: 300,
        height: 300,
        top: -100,
        right: -100,
        opacity: 0.3,
    },
    container: {
        flex: 1,
        overflow: "visible",
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: theme.margins.md
    }
}))
