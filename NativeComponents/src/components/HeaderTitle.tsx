import { appTheme } from "../theme/AppTheme";
import { Text, StyleSheet, TextStyle, StyleProp } from "react-native";
import React from "react";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

export const HeaderTitle = ({ title, sx }: { title: string; sx?: StyleProp<TextStyle> }) => {
    const {
        theme: { colors },
    } = useThemeContext();
    return <Text style={[appTheme.title, styles.title, { color: colors.text }, sx]}>{title}</Text>;
};

const styles = StyleSheet.create({
    title: {
        marginBottom: 15,
    },
});
