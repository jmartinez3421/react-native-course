import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export const HomeScreen = () => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Ionicons name="home" size={24} color={"black"} />
        </View>
    )
}

const styles = StyleSheet.create({});
