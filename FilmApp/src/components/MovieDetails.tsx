import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/Movies.ts";
import Icon from "react-native-vector-icons/Ionicons";

export const MovieDetails = ({ movie }: { movie: Movie }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subtitle}>{movie.title}</Text>
            </View>
            <View>
                <Icon name="star-outline" size={16} color={"gray"} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        marginTop: -20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.5,
    },
});
