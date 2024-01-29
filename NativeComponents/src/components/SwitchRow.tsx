import { StyleSheet, Text, View } from "react-native";
import { CustomSwitch } from "./CustomSwitch";
import React from "react";

type SwitchRowProps = {
    title: string;
    value: boolean;
    onChange: (value: boolean) => void;
};
export const SwitchRow = ({ title, value, onChange }: SwitchRowProps) => (
    <View style={styles.switchRow}>
        <CustomSwitch isOn={value} onChange={onChange} />
        <Text style={[styles.switchText, !value && styles.disabledSwitchText]}>{title}</Text>
    </View>
);

const styles = StyleSheet.create({
    switchRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
        columnGap: 10,
    },
    switchText: {
        fontSize: 25,
    },
    disabledSwitchText: {
        fontSize: 25,
        color: "grey",
    },
});
