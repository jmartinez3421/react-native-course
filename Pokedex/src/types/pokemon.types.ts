export interface PokemonListResponse {
    count: number;
    next: string;
    previous: null;
    results: PokemonListObject[];
}

export interface PokemonListObject {
    name: string;
    url: string;
}

export interface SimplePokemon {
    id: string;
    name: string;
    img: string;
    color?: string;
}
