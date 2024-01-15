import { API_KEY, API_URL } from "./environment.ts";
import { Movie, MovieListResponse } from "../types/Movies.ts";

export const getNowPlayingMovies = async (page: number = 1, language: string = "en-US"): Promise<Movie[]> => {
    const response = await fetch(`${API_URL}/now_playing?language=${language}&page=${page}`, {
        headers: {
            "Content-Type": "application/json;",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    const data = (await response.json()) as MovieListResponse;
    return data.results;
};

export const getPopularMovies = async (page: number = 1, language: string = "en-US"): Promise<Movie[]> => {
    const response = await fetch(`${API_URL}/popular?language=${language}&page=${page}`, {
        headers: {
            "Content-Type": "application/json;",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    const data = (await response.json()) as MovieListResponse;
    return data.results;
};

export const getTopRatedMovies = async (page: number = 1, language: string = "en-US"): Promise<Movie[]> => {
    const response = await fetch(`${API_URL}/top_rated?language=${language}&page=${page}`, {
        headers: {
            "Content-Type": "application/json;",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    const data = (await response.json()) as MovieListResponse;
    return data.results;
};

export const getUpcomingMovies = async (page: number = 1, language: string = "en-US"): Promise<Movie[]> => {
    const response = await fetch(`${API_URL}/upcoming?language=${language}&page=${page}`, {
        headers: {
            "Content-Type": "application/json;",
            Authorization: `Bearer ${API_KEY}`,
        },
    });
    const data = (await response.json()) as MovieListResponse;
    return data.results;
};
