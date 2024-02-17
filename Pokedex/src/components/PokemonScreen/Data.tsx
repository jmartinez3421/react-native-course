import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import { usePokemon } from "@/hooks/QueryHooks";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Loading } from "@/components/Layout/Loading";
import { DataBlock } from "@/components/PokemonScreen/DataBlock";
import { StatsChart } from "@/components/PokemonScreen/StatsChart";
import { SpritesList } from "@/components/PokemonScreen/SpritesList";
import { PokemonType } from "@/components/PokemonScreen/PokemonType";

type ContentDataProps = {
    id: string;
    color: string;
};

const PokemonDataInner = ({ id }: ContentDataProps) => {
    const { styles } = useStyles(stylesheet);

    const pokemonQuery = usePokemon({ id });
    const pokemon = React.useMemo(() => pokemonQuery.data, [pokemonQuery.data]);

    return (
        <>
            <DataBlock title="Types" style={{ marginTop: 400 }}>
                <View style={styles.typesRow}>
                    {pokemon.types.map((t) => (
                        <PokemonType type={t} key={t.type.name} />
                    ))}
                </View>
            </DataBlock>
            <DataBlock title="Stats">
                <StatsChart stats={pokemon.stats} />
            </DataBlock>
            <DataBlock title="Weight">
                <Text style={styles.regularText}>{pokemon.weight} Kg</Text>
            </DataBlock>
            <DataBlock title="Sprites">
                <SpritesList sprites={pokemon.sprites} />
            </DataBlock>
        </>
    );
};

export const PokemonData = (props: ContentDataProps) => {
    const { styles } = useStyles(stylesheet);
    return (
        <ScrollView style={styles.container}>
            <React.Suspense fallback={<Loading color={props.color} />}>
                <PokemonDataInner {...props} />
            </React.Suspense>
        </ScrollView>
    );
};

const stylesheet = createStyleSheet((theme) => ({
    container: {
        ...StyleSheet.absoluteFillObject,
        paddingHorizontal: theme.margins.xl,
    },
    regularText: {
        fontSize: 18,
    },
    typesRow: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 10,
    },
}));
