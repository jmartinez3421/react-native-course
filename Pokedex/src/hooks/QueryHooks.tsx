import { QueryKey, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPokemonList } from "@/api/pokeapi";
import { PokemonListResponse } from "@/types/pokemon.types";

type QueryOptions<T, R> = Omit<UseQueryOptions<T, R, T, QueryKey>, "queryKey" | "queryFn"> | undefined;
interface UseEntitiesProps<T, R> {
    queryOptions?: QueryOptions<T, R>;
}

interface UseListPokemonProps extends UseEntitiesProps<PokemonListResponse, PokemonListResponse> {
    limit?: number;
    offset?: number;
}

export const PokemonListCacheKey = "pokemon-list";

export const useListPokemon = ({ queryOptions, limit = 20, offset = 0 }: UseListPokemonProps) => {
    return useSuspenseQuery({
        queryKey: [PokemonListCacheKey, limit, offset],
        queryFn: () => getPokemonList(limit, offset),
        ...queryOptions,
    });
};
