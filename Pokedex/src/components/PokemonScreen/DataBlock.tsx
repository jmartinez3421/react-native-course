import React from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { View, Text } from "react-native";

interface Props {
    title: string;
    children?: React.ReactNode;
}
export const DataBlock = ({ title, children }: Props) => {
    const { styles } = useStyles(stylesheet);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    container: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },
}));
