import React from "react";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/navigation/StackNavigation";
import { PokemonNotFound } from "@/404/404";
import { useStyles, createStyleSheet } from "react-native-unistyles";
import { PokemonScreenHeader } from "@/components/PokemonScreen/Header";

interface Props extends StackScreenProps<RootStackParamList, "PokemonScreen"> {}

export const PokemonScreen = ({ route }: Props) => {
    const { styles } = useStyles(stylesheet);

    if (!route.params) {
        return <PokemonNotFound />;
    }

    const { simplePokemon, color } = route.params;

    return (
        <View>
            <PokemonScreenHeader pokemon={simplePokemon} color={color} />
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({}));
