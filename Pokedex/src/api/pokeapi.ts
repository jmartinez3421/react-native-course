import { PokemonListResponse } from "@/types/pokemon.types";

export const getPokemonList = async (limit: number, offset: number): Promise<PokemonListResponse> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
};
