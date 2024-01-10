import React from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import { useNowPlayingMovies } from "../hooks/queryHooks.tsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MovieCard } from "../components/MovieCard.tsx";
import Carousel from "react-native-snap-carousel";

const HomeScreenInner = () => {
    const nowPlayingMoviesQuery = useNowPlayingMovies({});
    const nowPlayingMovies = React.useMemo(() => nowPlayingMoviesQuery.data, [nowPlayingMoviesQuery.data]);

    const { width } = useWindowDimensions();

    return (
        <View style={{ height: 450 }}>
            <Carousel
                data={nowPlayingMovies}
                renderItem={({ item }) => <MovieCard movie={item} />}
                sliderWidth={width}
                itemWidth={300}
            />
        </View>
    );
};

export const HomeScreen = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{ paddingTop: insets.top + 10 }}>
            <React.Suspense fallback={<ActivityIndicator color="royalblue" />}>
                <HomeScreenInner />
            </React.Suspense>
        </View>
    );
};
