import React from "react";
import { Text, View } from "react-native";
import { stackStyles } from "../../themes/StackTheme.tsx";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator.tsx";

interface Props extends StackScreenProps<RootStackParams, "PersonScreen"> {}

export const PersonScreen = ({ route, navigation }: Props) => {
    const { params } = route;

    React.useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, []);

    return (
        <View style={stackStyles.container}>
            <Text style={stackStyles.title}>Welcome</Text>
        </View>
    );
};
