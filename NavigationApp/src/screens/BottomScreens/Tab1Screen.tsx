import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { stackStyles } from "../../themes/StackTheme.tsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Tab1Screen = () => {
    const inset = useSafeAreaInsets();

    return (
        <View style={[stackStyles.container, styles.iconsContainer, { paddingTop: inset.top }]}>
            <Icon name="american-football-outline" size={75} color="#303030" />
            <Icon name="bandage" size={75} color="#303030" />
            <Icon name="beer" size={75} color="#303030" />
        </View>
    );
};

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
