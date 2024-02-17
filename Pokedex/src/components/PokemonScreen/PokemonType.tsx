import React from "react";
import { PokemonTypeElement, Type } from "@/types/pokemon.types";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const PokemonType = ({ type }: { type: Type }) => {
    const { styles } = useStyles(stylesheet);

    const pillColor = React.useMemo(() => {
        switch (type.type.name) {
            case PokemonTypeElement.Bug:
                return "#92BC2C";
            case PokemonTypeElement.Dark:
                return "#595761";
            case PokemonTypeElement.Dragon:
                return "#0C69C8";
            case PokemonTypeElement.Electric:
                return "#F2D94E";
            case PokemonTypeElement.Fairy:
                return "#EE90E6";
            case PokemonTypeElement.Fighting:
                return "#D3425F";
            case PokemonTypeElement.Fire:
                return "#FBA54C";
            case PokemonTypeElement.Flying:
                return "#A1BBEC";
            case PokemonTypeElement.Ghost:
                return "#5F6DBC";
            case PokemonTypeElement.Grass:
                return "#5FBD58";
            case PokemonTypeElement.Ground:
                return "#DA7C4D";
            case PokemonTypeElement.Ice:
                return "#75D0C1";
            case PokemonTypeElement.Normal:
                return "#A0A29F";
            case PokemonTypeElement.Poison:
                return "#B763CF";
            case PokemonTypeElement.Psychic:
                return "#FA8581";
            case PokemonTypeElement.Rock:
                return "#C9BB8A";
            case PokemonTypeElement.Steel:
                return "#5695A3";
            case PokemonTypeElement.Water:
                return "#539DDF";
            default:
                return "#D2D4D4";
        }
    }, [type]);

    return (
        <View style={[styles.container, { backgroundColor: pillColor }]}>
            <Text style={styles.title}>{type.type.name}</Text>
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    container: {
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        marginRight: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    title: {
        fontSize: 16,
        color: "white",
        textTransform: "uppercase",
        fontWeight: "bold",
    },
}));
