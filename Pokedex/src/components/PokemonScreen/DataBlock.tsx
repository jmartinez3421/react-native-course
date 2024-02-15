import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { View, Text, StyleProp, ViewStyle } from "react-native";

interface Props {
    title: string;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}
export const DataBlock = ({ title, children, style }: Props) => {
    const { styles } = useStyles(stylesheet);

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    container: {
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
}));
