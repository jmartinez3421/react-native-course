import React from "react";
import { ScrollView, Text, View } from "react-native";
import { usePokemon } from "@/hooks/QueryHooks";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Loading } from "@/components/Layout/Loading";
import { DataBlock } from "@/components/PokemonScreen/DataBlock";
import { StatsChart } from "@/components/PokemonScreen/StatsChart";

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
            <DataBlock title="Types">
                <View style={styles.typesRow}>
                    {pokemon.types.map((t) => (
                        <Text key={t.type.name} style={[styles.regularText, { textTransform: "capitalize" }]}>
                            {t.type.name}
                        </Text>
                    ))}
                </View>
            </DataBlock>
            <DataBlock title="Stats">
                <StatsChart stats={pokemon.stats} />
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
        flex: 1,
        marginTop: -180,
        paddingTop: 200,
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
