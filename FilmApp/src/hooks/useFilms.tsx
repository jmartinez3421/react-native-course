import { QueryKey, useQuery, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;

interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

interface UseFilmsProps extends UseEntitiesProps<unknown, unknown> { }

export const FilmsCacheKey = "films"
export const useFilms = ({ queryOptions }: UseFilmsProps) => useSuspenseQuery({
    queryKey: [FilmsCacheKey],
    queryFn: async () => {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        return data;
    },
    ...queryOptions,
});
