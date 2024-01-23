import { useMovie, useMovieCredits } from "./queryHooks.tsx";

export const useMovieDetails = (movieId: number) => {
    const movieDetailsQuery = useMovie({
        movieId,
    });

    const movieCreditsQuery = useMovieCredits({
        movieId,
    });

    return {
        details: movieDetailsQuery.data,
        credits: movieCreditsQuery.data,
    };
};
