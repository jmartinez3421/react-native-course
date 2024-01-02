import React from "react";
import { Text, View } from "react-native";
import { StyledButton } from "../components/StyledButton.tsx";
import { StackScreenProps } from "@react-navigation/stack";
import { stackStyles } from "../themes/StackTheme.tsx";
import { Separator } from "../components/Separator.tsx";

interface Props extends StackScreenProps<any> {}

export const Page1Screen = ({ navigation }: Props) => {
    return (
        <View style={stackStyles.container}>
            <Text style={stackStyles.title}>Page1Screen</Text>
            <StyledButton title="Go to Page 2" onPress={() => navigation.navigate("Page2Screen")} />
            <Separator />
            <Text style={stackStyles.subtitle}>Navigate with arguments</Text>
            <View style={stackStyles.buttonsRow}>
                <StyledButton
                    title="Go to Pedro"
                    onPress={() =>
                        navigation.navigate("PersonScreen", {
                            id: 1,
                            name: "Pedro",
                        })
                    }
                />
                <StyledButton
                    title="Go to Juan"
                    onPress={() =>
                        navigation.navigate("PersonScreen", {
                            id: 2,
                            name: "Juan",
                        })
                    }
                />
            </View>
        </View>
    );
};
