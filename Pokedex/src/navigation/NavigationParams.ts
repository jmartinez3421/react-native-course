import { SimplePokemon } from "@/types/pokemon_list.types";

export type RootStackParamList = {
    HomeScreen: undefined;
    PokemonScreen: {
        simplePokemon: SimplePokemon;
        color: string;
    };
};
