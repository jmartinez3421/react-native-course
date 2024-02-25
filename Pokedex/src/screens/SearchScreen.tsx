import React from "react";
import { FlatList, Platform, Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "@/components/Search/SearchInput";
import { useListAllPokemon } from "@/hooks/QueryHooks";
import { Loading } from "@/components/Layout/Loading";
import { PokemonCard } from "@/components/PokemonCard";
import { mapPokemonList } from "@/utils/listUtils";

const SearchScreenInner = () => {
    const { styles } = useStyles(stylesheet);

    const pokemonListQuery = useListAllPokemon({});

    const pokemons = React.useMemo(() => {
        const result = pokemonListQuery.data.results ?? [];
        return mapPokemonList(result);
    }, [pokemonListQuery.data]);

    return (
        <View>
            <SearchInput sx={styles.searchInput} />
            <FlatList
                data={pokemons}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={<Text style={[styles.title]}>Pokedex</Text>}
            />
        </View>
    );
};

export const SearchScreen = () => {
    const { styles } = useStyles(stylesheet);

    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <React.Suspense fallback={<Loading color="grey" />}>
                <SearchScreenInner />
            </React.Suspense>
        </View>
    );
};

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flex: 1,
        marginHorizontal: theme.margins.xl,
    },
    searchInput: {
        marginTop: Platform.OS === "ios" ? 10 : 30,
        zIndex: 1,
        paddingBottom: 5,
        shadowColor: "#fff",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 7,

        elevation: 6,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: theme.margins.xl,
        paddingTop: 15,
    },
}));
