import React from "react";
import { Text, View } from "react-native";
import { stackStyles } from "../themes/StackTheme.tsx";
import { StyledButton } from "../components/StyledButton.tsx";
import { useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator.tsx";
import { StackNavigationProp } from "@react-navigation/stack";

type ScreenNavigationProp = StackNavigationProp<RootStackParams, "Page2Screen">;

export const Page2Screen = () => {
    const navigator = useNavigation<ScreenNavigationProp>();

    return (
        <View style={stackStyles.container}>
            <Text style={stackStyles.title}>Page2Screen</Text>

            <StyledButton title="Go to Page 3" onPress={() => navigator.navigate("Page3Screen")} />
        </View>
    );
};
