import React from "react";
import { Text, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../navigation/DrawerNavigator.tsx";
import { stackStyles } from "../themes/StackTheme.tsx";

interface Props extends DrawerScreenProps<RootDrawerParams, "Settings"> {}

export const SettingsScreen = ({ navigation }: Props) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);

    return (
        <View style={stackStyles.container}>
            <Text>SettingsScreen</Text>
        </View>
    );
};
