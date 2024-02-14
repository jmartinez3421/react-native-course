import { PokemonListObject, SimplePokemon } from "@/types/pokemon_list.types";

const getPokemonId = (url: string): string => {
    const splitUrl = url.split("/");
    return splitUrl[splitUrl.length - 2];
};

export const mapPokemonList = (pokemonList: PokemonListObject[]): SimplePokemon[] =>
    pokemonList.map((pokemon) => ({
        id: getPokemonId(pokemon.url),
        name: pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getPokemonId(
            pokemon.url
        )}.png`,
    }));
