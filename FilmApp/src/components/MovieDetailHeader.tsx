import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { Movie } from "../types/Movies.ts";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const MovieDetailHeader = ({ movie }: { movie: Movie }) => {
    const poster_url = React.useMemo(() => `https://image.tmdb.org/t/p/w500${movie.poster_path}`, [movie.poster_path]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: poster_url }} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        height: SCREEN_HEIGHT * 0.7,
        overflow: "hidden",
    },
    image: {
        flex: 1,
    },
});
