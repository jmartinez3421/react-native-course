import React from "react";
import { TouchableOpacity, useWindowDimensions, View, Text, Image } from "react-native";
import { SimplePokemon } from "@/types/pokemon.types";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { FadeInImage } from "@/components/FadeInImage";
import { useImageColors } from "@/hooks/useImageColors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/StackNavigation";

// @ts-ignore
import WhitePokeball from "@/assets/white-pokeball.png";

export const PokemonCard = ({ pokemon }: { pokemon: SimplePokemon }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const { width: windowWidth } = useWindowDimensions();
    const { styles } = useStyles(stylesheet);

    const { bgColor } = useImageColors(pokemon.img);

    const handleCardPress = () => {
        navigation.navigate("PokemonScreen", {
            simplePokemon: pokemon,
            color: bgColor,
        });
    };

    return (
        <View style={[styles.cardContainer, { width: windowWidth * 0.4, backgroundColor: bgColor }]}>
            <TouchableOpacity onPress={handleCardPress} activeOpacity={0.8}>
                <View style={styles.contentContainer}>
                    <View>
                        <Text style={styles.pokemonName}>{`${pokemon.name} \n#${pokemon.id}`}</Text>
                    </View>
                    <View style={styles.pokeballContainer}>
                        <Image source={WhitePokeball} style={styles.pokeball} />
                    </View>
                    <FadeInImage uri={pokemon.img} style={styles.pokemonImage} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    cardContainer: {
        marginHorizontal: 10,
        height: 120,
        marginBottom: 25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    pokemonName: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        top: 20,
        left: 10,
        textTransform: "capitalize",
    },
    pokeball: {
        width: 100,
        height: 100,
        position: "absolute",
        right: -20,
        bottom: -20,
        opacity: 0.5,
    },
    contentContainer: {
        width: "100%",
        height: "100%",
    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: "absolute",
        right: -8,
        bottom: -8,
    },
    pokeballContainer: {
        width: 100,
        height: 100,
        position: "absolute",
        right: 0,
        bottom: 0,
        overflow: "hidden",
    },
}));
