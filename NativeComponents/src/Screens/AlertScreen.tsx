import React from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import androidPrompt from "react-native-prompt-android";

export const AlertScreen = () => {
    const handleAlertDisplay = () => {
        Alert.alert(
            "Title",
            "This is the message",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel pressed"),
                    style: "destructive",
                },
                {
                    text: "OK",
                    onPress: () => console.log("OK pressed"),
                },
            ],
            {
                cancelable: true,
                onDismiss: () => console.log("onDismiss"),
            }
        );
    };

    const handleIOSPromptDisplay = () => {
        Alert.prompt(
            "Are you sure?",
            "This is action cannot be reverted",
            (value: string) => console.log("value", value),
            "plain-text",
            "",
            "number-pad"
        );
    };

    const handleAndroidPromptDisplay = () => {
        androidPrompt(
            "Are you sure?",
            "This is action cannot be reverted",
            (value: string) => console.log("value", value),
            {
                type: "plain-text",
                cancelable: true,
                defaultValue: "",
                placeholder: "number-pad",
            }
        );
    };

    return (
        <View>
            <HeaderTitle title="Alerts" />
            <TouchableOpacity onPress={handleAlertDisplay} style={styles.button}>
                <Text style={styles.buttonText}>Show alert</Text>
            </TouchableOpacity>
            {Platform.OS === "ios" && (
                <TouchableOpacity onPress={handleIOSPromptDisplay} style={styles.button}>
                    <Text style={styles.buttonText}>Show IOS prompt</Text>
                </TouchableOpacity>
            )}
            {Platform.OS === "android" && (
                <TouchableOpacity onPress={handleAndroidPromptDisplay} style={styles.button}>
                    <Text style={styles.buttonText}>Show Android prompt</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "royalblue",
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
    },
});
