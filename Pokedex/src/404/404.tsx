import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { RootStackParamList } from "@/navigation/StackNavigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export const PokemonNotFound = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const { styles } = useStyles(stylesheet);
    return (
        <View>
            <Text> Pokemon not found </Text>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                <Text style={styles.buttonText}> Go back </Text>
            </TouchableOpacity>
        </View>
    );
};

const stylesheet = createStyleSheet((theme) => ({
    button: {
        backgroundColor: theme.colors.typography,
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: "center",
    },
    buttonText: {
        color: theme.colors.background,
        fontSize: 18,
        fontWeight: "bold",
    },
}));
