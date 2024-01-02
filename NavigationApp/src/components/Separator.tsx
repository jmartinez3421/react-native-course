import React from "react";
import { StyleSheet, View } from "react-native";

export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "#D4D4D4",
        marginVertical: 10,
    },
});
