import React from "react";
import { Platform, Switch } from "react-native";

type Props = {
    isOn: boolean;
    onChange?: (value: boolean) => void;
};

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const [isEnabled, setIsEnabled] = React.useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange && onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: "#d4d2d2", true: "#5856D6" }}
            thumbColor={Platform.OS === "android" ? "royalblue" : ""}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
