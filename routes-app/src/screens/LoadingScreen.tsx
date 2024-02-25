import React from "react";
import { ActivityIndicator, Platform, StyleSheet, Text, View } from "react-native";

export const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={Platform.OS === "ios" ? "large" : 80} color="#303030"  />
            <Text style={styles.text}>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        rowGap: 20,
    },
    text: {
        fontSize: 16,
        color: "#303030",
    }
});
