import { useNowPlayingMovies, usePopularMovies, useTopRatedMovies, useUpcomingMovies } from "./queryHooks.tsx";
import React from "react";

export const useMovies = () => {
    const nowPlayingMoviesQuery = useNowPlayingMovies({});
    const nowPlayingMovies = React.useMemo(() => nowPlayingMoviesQuery.data, [nowPlayingMoviesQuery.data]);

    const popularMoviesQuery = usePopularMovies({});
    const popularMovies = React.useMemo(() => popularMoviesQuery.data, [popularMoviesQuery.data]);

    const topRatedMoviesQuery = useTopRatedMovies({});
    const topRatedMovies = React.useMemo(() => topRatedMoviesQuery.data, [topRatedMoviesQuery.data]);

    const upcomingMoviesQuery = useUpcomingMovies({});
    const upcomingMovies = React.useMemo(() => upcomingMoviesQuery.data, [upcomingMoviesQuery.data]);

    return {
        nowPlayingMovies,
        popularMovies,
        topRatedMovies,
        upcomingMovies,
    };
};
