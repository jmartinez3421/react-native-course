import React from "react";
import { Text, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StyledButton } from "../../components/StyledButton.tsx";
import { stackStyles } from "../../themes/StackTheme.tsx";

interface Props extends StackScreenProps<any> {}

export const Page3Screen = ({ navigation }: Props) => {
    return (
        <View style={stackStyles.container}>
            <Text style={stackStyles.title}>Page3Screen</Text>
            <StyledButton title="Go Back" onPress={() => navigation.pop()} />
            <StyledButton title="Go home" onPress={() => navigation.popToTop()} />
        </View>
    );
};

