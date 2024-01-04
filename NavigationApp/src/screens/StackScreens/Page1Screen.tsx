import React from "react";
import { Text, useWindowDimensions, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { StyledButton } from "../../components/StyledButton.tsx";
import { appStyles } from "../../themes/StackTheme.tsx";
import { Separator } from "../../components/Separator.tsx";

// interface Props extends StackScreenProps<any> {}
interface Props extends DrawerScreenProps<any> {}

export const Page1Screen = ({ navigation }: Props) => {
    const { width } = useWindowDimensions();

    React.useEffect(() => {
        navigation.setOptions({
            headerLeft: () =>
                width < 768 ? (
                    <StyledButton
                        title="menu"
                        isIcon
                        onPress={() => navigation.toggleDrawer()}
                        sx={{ marginLeft: 10, borderRadius: 50 }}
                    />
                ) : null,
        });
    }, [width]);

    return (
        <View style={appStyles.container}>
            <Text style={appStyles.title}>Page1Screen</Text>
            <StyledButton title="Go to Page 2" onPress={() => navigation.navigate("Page2Screen")} />
            <Separator />
            <Text style={appStyles.subtitle}>Navigate with arguments</Text>
            <View style={appStyles.buttonsRow}>
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
