import React from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator.tsx";
import { MovieDetailHeader } from "../components/MovieDetailHeader.tsx";
import { MovieDetails } from "../components/MovieDetails.tsx";
import Icon from "react-native-vector-icons/Ionicons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends StackScreenProps<RootStackParams, "Detail"> {}

const SCREEN_HEIGHT = Dimensions.get("screen").height;

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
            <MovieDetailHeader movie={movie} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.invisibleDiv} />
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
    invisibleDiv: {
        height: SCREEN_HEIGHT * 0.7,
    },
});
