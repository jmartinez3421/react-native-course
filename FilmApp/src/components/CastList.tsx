import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Cast } from "../types/Movies.ts";

const CastCard = ({ cast }: { cast: Cast }) => {
    const profileImage = React.useMemo(
        () => `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
        [cast.profile_path]
    );

    return (
        <View style={styles.card}>
            <Image source={{ uri: profileImage }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{cast.name}</Text>
                <Text style={styles.character}>{cast.character}</Text>
            </View>
        </View>
    );
};

export const CastList = ({ cast }: { cast: Cast[] }) => {
    return (
        <FlatList
            data={cast}
            renderItem={({ item }) => <CastCard cast={item} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
            contentContainerStyle={styles.list}
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        borderColor: "#f1f1f1",
        borderStyle: "solid",
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,

        elevation: 6,
    },
    image: {
        width: 75,
        height: 75,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    infoContainer: {
        padding: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    character: {
        fontSize: 14,
        color: "#888",
    },
    list: { paddingHorizontal: 10, marginHorizontal: -10, marginBottom: 15 },
});
