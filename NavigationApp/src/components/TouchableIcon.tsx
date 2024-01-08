import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
    icon: string;
    onPress: () => void;
    size?: number;
    color?: string;
    disabled?: boolean;
};

export const TouchableIcon = ({ icon, onPress, size = 22, color = "#303030", disabled }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <Text>
                <Icon name={icon} size={size} color={color} />
            </Text>
        </TouchableOpacity>
    );
};
