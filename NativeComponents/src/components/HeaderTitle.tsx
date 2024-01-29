import { appTheme } from "../theme/AppTheme";
import { Text, StyleSheet, TextStyle } from "react-native";
import React from "react";

export const HeaderTitle = ({ title, sx }: { title: string; sx?: TextStyle }) => {
    return <Text style={[appTheme.title, styles.title, sx]}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 15,
    },
});
