import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Movie } from "../types/Movies.ts";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const MovieDetailHeader = ({ movie }: { movie: Movie }) => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const poster_url = React.useMemo(() => `https://image.tmdb.org/t/p/w500${movie.poster_path}`, [movie.poster_path]);

    return (
        <View style={styles.container}>
            <Image source={{ uri: poster_url }} style={styles.image} />
            <TouchableOpacity style={{ ...styles.back, marginTop: insets.top }} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" size={40} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: SCREEN_HEIGHT * 0.7,
        overflow: "hidden",
    },
    image: {
        flex: 1,
    },
    back: {
        position: "absolute",
        top: 10,
        left: 15,
        zIndex: 999,
    },
});
