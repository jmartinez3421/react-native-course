import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard.tsx";
import { Movie } from "../types/Movies.ts";

type Props = {
    movies: Movie[];
};

export const MovieCarousel = ({ movies }: Props) => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Carousel
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                sliderWidth={width}
                itemWidth={300}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 450,
    },
});
