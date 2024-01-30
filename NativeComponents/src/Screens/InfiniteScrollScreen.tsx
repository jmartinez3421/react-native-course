import React from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { FadeInImage } from "../components/FadeInImage";

const renderItem = ({ item }: { item: number }) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} style={styles.image} />;
};

const renderFooter = () => {
    return (
        <View style={styles.footer}>
            <ActivityIndicator size={25} color="grey" />
        </View>
    );
};

export const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = React.useState([0, 1, 2, 3, 4, 5]);

    const loadMoreNumbers = () => {
        const lastNumber = numbers[numbers.length - 1];
        const newNumbers = Array.from({ length: 5 }, (_, index) => index + lastNumber + 1);
        setNumbers([...numbers, ...newNumbers]);
    };

    return (
        <View>
            <FlatList
                data={numbers}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
                ListHeaderComponent={() => <HeaderTitle title="Infinite scroll" />}
                onEndReached={loadMoreNumbers}
                onEndReachedThreshold={0.5}
                ListFooterComponent={renderFooter}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 400,
        borderRadius: 10,
        marginVertical: 10,
    },
    footer: {
        height: 150,
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
