import React from "react";
import { icons, XOctagon } from "lucide-react-native";

interface Props {
    name: keyof typeof icons;
    size?: number;
    color?: string;
}

export const Icon = ({ name, size = 24, color = "#303030" }: Props) => {
    const LucideIcon = icons[name];

    if (!LucideIcon) {
        return <XOctagon size={size} color={color} />;
    }

    return <LucideIcon size={size} color={color} />;
};
