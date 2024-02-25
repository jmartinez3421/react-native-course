import React from "react";
import { StyleProp, TextInput, View, ViewStyle } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
    sx?: StyleProp<ViewStyle>;
}

export const SearchInput = ({ sx }: Props) => {
    const { styles } = useStyles(stylesheet);

    return (
        <View style={sx}>
            <View style={styles.textBackground}>
                <TextInput
                    style={styles.input}
                    placeholder="Search pokemon"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Ionicons name={"search"} size={30} color={"#303030"} />
            </View>
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    textBackground: {
        backgroundColor: "#f3f1f3",
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 7,

        elevation: 6,
    },
    input: {
        fontSize: 16,
        flex: 1,
    },
}));
