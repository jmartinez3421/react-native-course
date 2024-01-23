import { QueryKey, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Cast, Movie, MovieDetails, MovieListResponse } from "../types/Movies.ts";
import {
    getMovieById,
    getMovieCredits,
    getNowPlayingMovies,
    getPopularMovies,
    getTopRatedMovies,
    getUpcomingMovies,
} from "../api/Movies.ts";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;
interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

type UseMovieProps<T, R> = UseEntitiesProps<T, R> & {
    language?: string;
};

interface UseNowPlayingMoviesProps extends UseMovieProps<Movie[], MovieListResponse> {
    page?: number;
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

interface UseMovieByIdProps extends UseMovieProps<MovieDetails, MovieDetails> {
    movieId: number;
}
export const useMovie = ({ movieId, language, queryOptions }: UseMovieByIdProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, movieId, language],
        queryFn: () => getMovieById(movieId, language),
        ...queryOptions,
    });

export const MovieCreditsCacheKey = "credits";
interface UseMovieCreditsProps extends UseMovieProps<Cast[], Cast[]> {
    movieId: number;
}
export const useMovieCredits = ({ movieId, queryOptions }: UseMovieCreditsProps) =>
    useSuspenseQuery({
        queryKey: [MovieCreditsCacheKey, movieId],
        queryFn: () => getMovieCredits(movieId),
        ...queryOptions,
    });
