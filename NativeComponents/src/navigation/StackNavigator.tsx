import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { Animation101Screen } from "../Screens/Animation101Screen";
import { Animation102Screen } from "../Screens/Animation102Screen";
import { SwitchScreen } from "../Screens/SwitchScreen";
import { AlertScreen } from "../Screens/AlertScreen";
import { TextInputScreen } from "../Screens/TextInputScreen";
import ExpoConstants from "expo-constants";
import { PullToRefreshScreen } from "../Screens/PullToRefreshScreen";
import { SectionListScreen } from "../Screens/SectionListScreen";
import { ModalScreen } from "../Screens/ModalScreen";

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
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: "white",
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
        </Stack.Navigator>
    );
};
