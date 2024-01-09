import { QueryKey, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { Movie, MovieListResponse } from "../types/Movies.ts";
import { getNowPlayingMovies } from "../api/Movies.ts";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;
interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

interface UseNowPlayingMoviesProps extends UseEntitiesProps<Movie[], MovieListResponse> {
    page?: number;
    language?: string;
}

export const MovieCacheKey = "movies";
export const useNowPlayingMovies = ({ page, language, queryOptions }: UseNowPlayingMoviesProps) =>
    useSuspenseQuery({
        queryKey: [MovieCacheKey, page, language],
        queryFn: () => getNowPlayingMovies(page, language),
        ...queryOptions,
    });
