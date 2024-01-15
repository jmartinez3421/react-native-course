import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovieSlider } from "../components/MovieSlider.tsx";
import { MovieCarousel } from "../components/MovieCarousel.tsx";
import { useMovies } from "../hooks/useMovies.tsx";

const HomeScreenInner = () => {
    const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = useMovies();

    return (
        <>
            <MovieCarousel movies={nowPlayingMovies} />
            <MovieSlider movies={popularMovies} title="Popular movies" />
            <MovieSlider movies={topRatedMovies} title="Top rated movies" />
            <MovieSlider movies={upcomingMovies} title="Upcoming movies" />
        </>
    );
};

export const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <ScrollView style={{ marginTop: insets.top + 10, marginBottom: 10 }}>
            <React.Suspense fallback={<ActivityIndicator color="royalblue" />}>
                <HomeScreenInner />
            </React.Suspense>
        </ScrollView>
    );
};
