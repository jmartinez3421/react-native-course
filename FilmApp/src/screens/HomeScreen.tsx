import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { API_KEY } from "../api/environment.ts";
import { useNowPlayingMovies } from "../hooks/queryHooks.tsx";

const HomeScreenInner = () => {
    const nowPlayingMoviesQuery = useNowPlayingMovies({});

    const nowPlayingMovies = React.useMemo(() => nowPlayingMoviesQuery.data, [nowPlayingMoviesQuery.data]);

    return (
        <>
            <Text>{JSON.stringify(nowPlayingMovies)}</Text>
            <Text>{API_KEY}</Text>
        </>
    );
};

export const HomeScreen = () => (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <React.Suspense fallback={<ActivityIndicator color="royalblue" />}>
            <HomeScreenInner />
        </React.Suspense>
    </View>
);
