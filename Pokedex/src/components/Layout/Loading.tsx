import { createStyleSheet, useStyles } from "react-native-unistyles";
import { ActivityIndicator, View } from "react-native";
import React from "react";

export const Loading = ({ color }: { color: string }) => {
    const { styles } = useStyles(stylesheet);
    return (
        <View style={styles.loader}>
            <ActivityIndicator color={color} size={50} />
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
}));
