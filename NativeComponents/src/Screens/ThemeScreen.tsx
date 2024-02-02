import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { StyledButton } from "../components/StyledButton";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

export const ThemeScreen = () => {
    const { setDarkTheme, setLightTheme } = useThemeContext();

    return (
        <View>
            <HeaderTitle title="Choose a theme" />
            <View style={styles.buttonsContainer}>
                <StyledButton onPress={setLightTheme} label="Light" fullWidth containerStyle={{ width: "45%" }} />
                <StyledButton onPress={setDarkTheme} label="Dark" fullWidth containerStyle={{ width: "45%" }} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 20,
        columnGap: 20,
        justifyContent: "center",
    },
});
