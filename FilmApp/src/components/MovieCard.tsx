import { Movie } from "../types/Movies.ts";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator.tsx";

type Props = {
    movie: Movie;
    size?: "small" | "large";
};

export const MovieCard = ({ movie, size = "large" }: Props) => {
    const poster_url = React.useMemo(() => `https://image.tmdb.org/t/p/w500${movie.poster_path}`, [movie.poster_path]);

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const handlePress = React.useCallback(() => {
        navigation.navigate("Detail", { movie });
    }, [movie]);

    return (
        <TouchableOpacity
            style={[styles.container, size === "small" && styles.containerSmall]}
            activeOpacity={0.8}
            onPress={handlePress}
        >
            <Image source={{ uri: poster_url }} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 420,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    containerSmall: {
        width: 150,
        height: 210,
    },
    image: {
        flex: 1,
        borderRadius: 20,
    },
});
