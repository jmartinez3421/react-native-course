import React, { useState } from "react";
import { SimplePokemon } from "@/types/pokemon.types";
import { getPokemonList } from "@/api/pokeapi";
import { getLimitAndOffset } from "@/utils/urlUtils";
import { mapPokemonList } from "@/utils/listUtils";

export const useSimplePokemonList = () => {
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const nextPageLimits = React.useRef({ limit: 20, offset: 0 });

    const loadPokemons = async () => {
        const response = await getPokemonList(nextPageLimits.current.limit, nextPageLimits.current.offset);
        nextPageLimits.current = getLimitAndOffset(response.next);

        setSimplePokemonList((prev) => [...prev, ...mapPokemonList(response.results)]);
    };

    return { simplePokemonList, loadPokemons };
};
