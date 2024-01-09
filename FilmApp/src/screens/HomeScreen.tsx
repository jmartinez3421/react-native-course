import React from "react";
import { Text, View } from "react-native";
import { API_URL } from "../api/environment.ts";

export const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>{API_URL}</Text>
        </View>
    );
};
