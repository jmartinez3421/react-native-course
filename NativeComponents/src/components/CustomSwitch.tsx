import React from "react";
import { Platform, Switch } from "react-native";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

type Props = {
    isOn: boolean;
    onChange?: (value: boolean) => void;
};

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const {
        theme: { colors, primaryDark },
    } = useThemeContext();

    const [isEnabled, setIsEnabled] = React.useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange && onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: colors.card, true: colors.primary }}
            thumbColor={Platform.OS === "android" ? primaryDark : ""}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
