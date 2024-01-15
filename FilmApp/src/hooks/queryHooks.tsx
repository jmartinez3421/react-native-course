import { QueryKey, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Movie, MovieListResponse } from "../types/Movies.ts";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "../api/Movies.ts";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;
interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

interface UseNowPlayingMoviesProps extends UseEntitiesProps<Movie[], MovieListResponse> {
    page?: number;
    language?: string;
}

export const MovieCacheKey = "movies";

export const NowPlayingMoviesCacheKey = "nowPlaying";
export const useNowPlayingMovies = ({ page, language, queryOptions }: UseNowPlayingMoviesProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, NowPlayingMoviesCacheKey, page, language],
        queryFn: () => getNowPlayingMovies(page, language),
        ...queryOptions,
    });

export const PopularMoviesCacheKey = "popular";
export const usePopularMovies = ({ page, language, queryOptions }: UseNowPlayingMoviesProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, PopularMoviesCacheKey, page, language],
        queryFn: () => getPopularMovies(page, language),
        ...queryOptions,
    });

export const TopRatedMoviesCacheKey = "topRated";
export const useTopRatedMovies = ({ page, language, queryOptions }: UseNowPlayingMoviesProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, TopRatedMoviesCacheKey, page, language],
        queryFn: () => getTopRatedMovies(page, language),
        ...queryOptions,
    });

export const UpcomingMoviesCacheKey = "upcoming";
export const useUpcomingMovies = ({ page, language, queryOptions }: UseNowPlayingMoviesProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, UpcomingMoviesCacheKey, page, language],
        queryFn: () => getUpcomingMovies(page, language),
        ...queryOptions,
    });
