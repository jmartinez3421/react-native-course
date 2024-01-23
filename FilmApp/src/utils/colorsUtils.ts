import { getColors } from "react-native-image-colors";
import { Movie } from "../types/Movies.ts";
import { ImageColors } from "../contexts/GradientContext.tsx";

export const getPosterColors = async (movie: Movie): Promise<ImageColors> => {
    const { poster_path } = movie;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const colors = await getColors(uri, {
        fallback: "#fff",
        cache: true,
        key: uri,
    });

    let primary = "transparent";
    let secondary = "transparent";
    if (colors.platform === "android") {
        primary = colors.dominant;
        secondary = colors.average;
    } else if (colors.platform === "ios") {
        primary = colors.primary;
        secondary = colors.secondary;
    }

    return { primary, secondary };
};
