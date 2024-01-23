import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator.tsx";
import { MovieDetailHeader } from "../components/MovieDetailHeader.tsx";
import { MovieDetails } from "../components/MovieDetails.tsx";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

export const DetailScreen = ({ route, navigation }: Props) => {
    const insets = useSafeAreaInsets();

    const movie = React.useMemo(() => route.params?.movie, [route.params]);

    return (
        <View>
            <View style={{ ...styles.back, marginTop: insets.top }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={40} color="#303030" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <MovieDetailHeader movie={movie} />
                <MovieDetails movie={movie} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    back: {
        position: "absolute",
        top: 10,
        left: 15,
        zIndex: 999,
        backgroundColor: "rgba(255,255,255,0.4)",
        borderRadius: 100,
        padding: 5,
    },
});
