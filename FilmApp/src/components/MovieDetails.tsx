import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { Movie } from "../types/Movies.ts";
import Icon from "react-native-vector-icons/Ionicons";
import { useMovieDetails } from "../hooks/useMovieDetails.tsx";
import { formatCurrency } from "../utils/currencyUtils.ts";
import { CastList } from "./CastList.tsx";

const MovieDetailsInner = ({ movieId }: { movieId: number }) => {
    const { details, credits } = useMovieDetails(movieId);

    const score = React.useMemo(() => Math.round(details.vote_average / 2), [details.vote_average]);

    return (
        <>
            <View>
                <Text>
                    {Array.from({ length: 5 }, (_, i) => (
                        <Icon
                            key={`star-${i}`}
                            name={i < score ? "star" : "star-outline"}
                            size={20}
                            color={i < score ? "gold" : "grey"}
                        />
                    ))}
                </Text>
                <Text style={[styles.subtitle, styles.space]}>{details.genres.map((g) => g.name).join(", ")}</Text>

                {/* History */}
                <Text style={styles.title}>History</Text>
                <Text style={styles.text}>{details.overview}</Text>

                {/*Budget*/}
                <Text style={styles.title}>Budget</Text>
                <Text style={styles.text}>{details.budget === 0 ? "Unknown" : formatCurrency(details.budget)}</Text>

                {/*Casting*/}
                <Text style={styles.title}>Casting</Text>
                <CastList cast={credits} />
            </View>
        </>
    );
};

export const MovieDetails = ({ movie }: { movie: Movie }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.subtitle}>{movie.title}</Text>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subtitle}>{movie.release_date}</Text>
            </View>
            <View style={styles.detailsContainer}>
                <React.Suspense fallback={<ActivityIndicator color="royalblue" />}>
                    <MovieDetailsInner movieId={movie.id} />
                </React.Suspense>
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
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.5,
    },
    detailsContainer: {
        marginTop: 10,
    },
    space: {
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 16,
    },
});
