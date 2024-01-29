import React from "react";
import { StyleSheet, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { SwitchRow } from "../components/SwitchRow";

export const SwitchScreen = () => {
    const [state, setState] = React.useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const handleSwitchChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View>
            <HeaderTitle title="Switches" />
            <SwitchRow
                title="isActive"
                value={state.isActive}
                onChange={(value) => handleSwitchChange(value, "isActive")}
            />
            <SwitchRow
                title="isHungry"
                value={state.isHungry}
                onChange={(value) => handleSwitchChange(value, "isHungry")}
            />
            <SwitchRow
                title="isHappy"
                value={state.isHappy}
                onChange={(value) => handleSwitchChange(value, "isHappy")}
            />
        </View>
    );
};
