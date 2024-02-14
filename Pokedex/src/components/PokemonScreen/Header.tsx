import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useStyles, createStyleSheet } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SimplePokemon } from "@/types/pokemon_list.types";
import { useNavigation } from "@react-navigation/native";

import WhitePokeball from "@/assets/white-pokeball.png";
import { FadeInImage } from "@/components/FadeInImage";

interface Props {
    pokemon: SimplePokemon;
    color: string;
}

export const PokemonScreenHeader = ({ pokemon, color }: Props) => {
    const { styles } = useStyles(stylesheet);
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={[styles.headerContainer, { backgroundColor: color }]}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.backButton, { top: insets.top * 0.6 + 20 }]}
            >
                <Ionicons name="arrow-back-outline" size={40} color="white" />
            </TouchableOpacity>
            <Text style={[styles.pokemonName, { top: insets.top * 0.6 + 60 }]}>
                {`${pokemon.name}\n#${pokemon.id}`}
            </Text>
            <Image source={WhitePokeball} style={styles.pokeball} />
            <FadeInImage uri={pokemon.img} style={styles.pokemonImage} />
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    headerContainer: {
        height: 380,
        zIndex: 999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        alignItems: "center",
    },
    backButton: {
        position: "absolute",
        left: 20,
    },
    pokemonName: {
        color: "white",
        fontSize: 40,
        alignSelf: "flex-start",
        left: 20,
        textTransform: "capitalize",
        fontWeight: "500",
    },
    pokeball: {
        width: 250,
        height: 250,
        position: "absolute",
        bottom: -5,
        opacity: 0.5,
    },
    pokemonImage: {
        width: 250,
        height: 250,
        position: "absolute",
        bottom: -15,
    },
}));
