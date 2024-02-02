import { Text, TouchableOpacity, View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

type Props = {
    onPress: () => void;
    label: string;
    icon?: keyof typeof Ionicons.glyphMap;
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    fullWidth?: boolean;
    buttonColor?: { backgroundColor: string; textColor: string };
};

export const StyledButton = ({ onPress, label, icon, containerStyle, disabled, fullWidth, buttonColor }: Props) => {
    const {
        theme: { colors },
    } = useThemeContext();
    return (
        <View style={containerStyle}>
            <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.7}>
                <View
                    style={[
                        styles.button,
                        {
                            backgroundColor: buttonColor?.backgroundColor || colors.primary,
                            width: fullWidth ? "100%" : "auto",
                        },
                    ]}
                >
                    <Text style={{ ...styles.text, color: buttonColor?.textColor || colors.text }}>{label}</Text>
                    {icon && <Ionicons name={icon} size={24} color={buttonColor?.textColor || colors.text} />}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "purple",
        borderRadius: 5,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 10,
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
});
