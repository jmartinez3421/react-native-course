import { QueryKey, UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { getPokemon, getPokemonList } from "@/api/pokeapi";
import { PokemonListResponse } from "@/types/pokemon_list.types";
import { PokemonFull } from "@/types/pokemon.types";

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

interface UsePokemonProps extends UseEntitiesProps<PokemonFull, PokemonFull> {
    id: string;
}
export const usePokemon = ({ queryOptions, id }: UsePokemonProps) => {
    return useSuspenseQuery({
        queryKey: ["pokemon", id],
        queryFn: () => getPokemon(id),
        ...queryOptions,
    });
};

export const useListAllPokemon = ({ queryOptions }: UseEntitiesProps<PokemonListResponse, PokemonListResponse>) => {
    return useListPokemon({ limit: 1300, offset: 0, queryOptions });
};
