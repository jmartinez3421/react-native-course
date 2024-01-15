import React from "react";
import { ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator.tsx";
import { MovieDetailHeader } from "../components/MovieDetailHeader.tsx";
import { MovieDetails } from "../components/MovieDetails.tsx";

interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export const DetailScreen = ({ route }: Props) => {
    const movie = React.useMemo(() => route.params?.movie, [route.params]);

    return (
        <ScrollView>
            <MovieDetailHeader movie={movie} />
            <MovieDetails movie={movie} />
        </ScrollView>
    );
};
