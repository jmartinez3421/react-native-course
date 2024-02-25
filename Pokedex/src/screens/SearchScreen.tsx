import React from "react";
import { FlatList, Keyboard, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SearchInput } from "@/components/Search/SearchInput";
import { useListAllPokemon } from "@/hooks/QueryHooks";
import { Loading } from "@/components/Layout/Loading";
import { PokemonCard } from "@/components/PokemonCard";
import { mapPokemonList } from "@/utils/listUtils";
import { SimplePokemon } from "@/types/pokemon_list.types";

const SearchScreenInner = () => {
    const { styles } = useStyles(stylesheet);

    const pokemonListQuery = useListAllPokemon({});
    const pokemons = React.useMemo(() => {
        const result = pokemonListQuery.data.results ?? [];
        return mapPokemonList(result);
    }, [pokemonListQuery.data]);

    const [filteredPokemons, setFilteredPokemons] = React.useState<SimplePokemon[]>([]);
    const [term, setTerm] = React.useState("");

    /**
     * Search Pokémon by name or id <br/>
     * If the value is a number, it will search by id, otherwise it will search by name
     * @param value
     */
    const searchPokemon = (value: string): SimplePokemon[] => {
        if (Number.isNaN(Number(value))) {
            return pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(value.toLowerCase()));
        }
        const pokemon = pokemons.find((p) => p.id === value);
        return pokemon ? [pokemon] : [];
    };

    /**
     * Handle the search input <br/>
     * If the value is empty, it will clear the filteredPokemons
     * @param value
     */
    const handleSearch = (value: string) => {
        setTerm(value);
        if (value === "") {
            setFilteredPokemons([]);
            return;
        }
        setFilteredPokemons(searchPokemon(value));
    };

    return (
        <View style={{ flex: 1 }}>
            <SearchInput sx={styles.searchInput} onDebounce={handleSearch} />
            <FlatList
                onScroll={Keyboard.dismiss}
                data={filteredPokemons}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={<Text style={[styles.title]}>{term}</Text>}
                ListFooterComponent={<View style={{ height: Platform.OS === "ios" ? 80 : 60 }} />}
            />
            {filteredPokemons.length === 0 && term !== "" && (
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.notFoundContainer}>
                        <Text style={styles.notFoundText}>No Pokémon found</Text>
                    </View>
                </TouchableWithoutFeedback>
            )}
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
    notFoundContainer: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    notFoundText: {
        fontSize: 20,
        color: "grey",
    },
}));
