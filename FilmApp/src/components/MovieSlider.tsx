import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MovieCard } from "./MovieCard.tsx";
import { Movie } from "../types/Movies.ts";

type Props = {
    movies: Movie[];
    title?: string;
};

export const MovieSlider = ({ movies, title }: Props) => {
    return (
        <View style={title ? styles.container : styles.containerWithoutTitle}>
            {title && <Text style={styles.title}>{title}</Text>}
            <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} size="small" />}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
                contentContainerStyle={{ paddingHorizontal: 10 }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        rowGap: 10,
        height: 250,
        marginTop: 20,
    },
    containerWithoutTitle: {
        height: 220,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
});
