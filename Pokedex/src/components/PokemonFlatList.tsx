import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useSimplePokemonList } from "@/hooks/useSimplePokemonList";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PokemonCard } from "@/components/PokemonCard";

export const PokemonFlatList = () => {
    const insets = useSafeAreaInsets();
    const { styles } = useStyles(stylesheet);
    const { loadPokemons, simplePokemonList } = useSimplePokemonList();

    return (
        <View>
            <FlatList
                data={simplePokemonList}
                renderItem={({ item }) => <PokemonCard pokemon={item} />}
                keyExtractor={(pokemon) => pokemon.id}
                onEndReached={loadPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={<ActivityIndicator size="large" color="#303030" style={{ height: 100 }} />}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={<Text style={[styles.title, { marginTop: insets.top + 20 }]}>Pokedex</Text>}
            />
        </View>
    );
};

const stylesheet = createStyleSheet((theme) => ({
    container: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: theme.margins.xl,
    },
}));
