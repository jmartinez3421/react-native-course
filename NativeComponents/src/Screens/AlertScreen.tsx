import React from "react";
import { Alert, Platform, StyleSheet, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import androidPrompt from "react-native-prompt-android";
import { StyledButton } from "../components/StyledButton";

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
            <View style={styles.buttonsContainer}>
                <StyledButton onPress={handleAlertDisplay} label="Show alert" />
                {Platform.OS === "ios" && <StyledButton onPress={handleIOSPromptDisplay} label="Show IOS prompt" />}
                {Platform.OS === "android" && (
                    <StyledButton onPress={handleAndroidPromptDisplay} label="Show Android prompt" />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        rowGap: 20,
    },
});
