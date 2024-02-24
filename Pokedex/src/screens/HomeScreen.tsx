import React from "react";
import { Image, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonFlatList } from "@/components/PokemonFlatList";

// @ts-ignore
import Pokeball from "@/assets/pokeball.png";

export const HomeScreen = () => {
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Image source={Pokeball} style={styles.pokeball} />
            <PokemonFlatList />
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
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
        paddingHorizontal: 15,
        paddingTop: 15,
    },
}));
