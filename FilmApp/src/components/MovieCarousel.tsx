import React from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { MovieCard } from "./MovieCard.tsx";
import { Movie } from "../types/Movies.ts";
import { getPosterColors } from "../utils/colorsUtils.ts";
import { useGradientContext } from "../contexts/GradientContext.tsx";

type Props = {
    movies: Movie[];
};

export const MovieCarousel = ({ movies }: Props) => {
    const { width } = useWindowDimensions();

    const { setMainColors } = useGradientContext();

    const handleSnapToItem = React.useCallback(
        async (index: number) => {
            const movie = movies[index];
            const colors = await getPosterColors(movie);
            setMainColors(colors);
        },
        [movies]
    );

    React.useEffect(() => {
        if (movies.length) {
            handleSnapToItem(0);
        }
    }, [movies]);

    return (
        <View style={styles.container}>
            <Carousel
                data={movies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                sliderWidth={width}
                itemWidth={300}
                onSnapToItem={handleSnapToItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 450,
    },
});
