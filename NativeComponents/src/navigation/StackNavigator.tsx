import React from "react";
import ExpoConstants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";

import { useThemeContext } from "../contexts/themeContext/ThemeContext";

import { AlertScreen } from "../Screens/AlertScreen";
import { Animation101Screen } from "../Screens/Animation101Screen";
import { Animation102Screen } from "../Screens/Animation102Screen";
import { HomeScreen } from "../Screens/HomeScreen";
import { InfiniteScrollScreen } from "../Screens/InfiniteScrollScreen";
import { ModalScreen } from "../Screens/ModalScreen";
import { NavigationContainer } from "@react-navigation/native";
import { PullToRefreshScreen } from "../Screens/PullToRefreshScreen";
import { SectionListScreen } from "../Screens/SectionListScreen";
import { SlidesScreen } from "../Screens/SlidesScreen";
import { SwitchScreen } from "../Screens/SwitchScreen";
import { TextInputScreen } from "../Screens/TextInputScreen";
import { ThemeScreen } from "../Screens/ThemeScreen";

export type RootStackParams = {
    HomeScreen: undefined;
    Animation101Screen: undefined;
    Animation102Screen: undefined;
    SwitchScreen: undefined;
    AlertScreen: undefined;
    TextInputScreen: undefined;
    PullToRefreshScreen: undefined;
    SectionListScreen: undefined;
    ModalScreen: undefined;
    InfiniteScrollScreen: undefined;
    SlidesScreen: undefined;
    ThemeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    const { theme } = useThemeContext();

    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        flex: 1,
                        paddingHorizontal: 10,
                        paddingTop: ExpoConstants.statusBarHeight + 10,
                        paddingBottom: 10,
                    },
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
                <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
                <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
                <Stack.Screen name="AlertScreen" component={AlertScreen} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
                <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
                <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
                <Stack.Screen name="ModalScreen" component={ModalScreen} />
                <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
                <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
                <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
