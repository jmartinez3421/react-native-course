import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Tab1Screen } from "../screens/BottomScreens/Tab1Screen.tsx";
import { StackNavigator } from "./StackNavigator.tsx";
import { Platform, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TopTabNavigator } from "./TopTabNavigator.tsx";

type RootTabParams = {
    Tab1Screen: undefined;
    Tab2Screen: undefined;
    Tab3Screen: undefined;
};

type IconProps = {
    color: string;
    focused: boolean;
    size?: number;
};

const TabIcon = ({ iconProps, routeName }: { iconProps: IconProps; routeName: keyof RootTabParams }) => {
    const icon = React.useMemo(() => {
        switch (routeName) {
            case "Tab1Screen":
                return "🏠";
            case "Tab2Screen":
                return "🔎";
            case "Tab3Screen":
                return "🔧";
            default:
                return "";
        }
    }, [routeName]);

    return <Text>{icon}</Text>;
};

const TabIos = createBottomTabNavigator<RootTabParams>();

const BottomTabIos = () => {
    return (
        <TabIos.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: "#55bb18",
                tabBarStyle: {
                    borderTopColor: "transparent",
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 17,
                },
                tabBarIcon: (props) => <TabIcon iconProps={props} routeName={route.name} />,
            })}
            sceneContainerStyle={{
                backgroundColor: "white",
            }}
        >
            <TabIos.Screen name="Tab1Screen" options={{ title: "Tab 1" }} component={Tab1Screen} />
            <TabIos.Screen name="Tab2Screen" options={{ title: "Top Tabs" }} component={TopTabNavigator} />
            <TabIos.Screen name="Tab3Screen" options={{ title: "Stack" }} component={StackNavigator} />
        </TabIos.Navigator>
    );
};

const TabAndroid = createMaterialBottomTabNavigator<RootTabParams>();

const BottomTabAndroid = () => (
    <TabAndroid.Navigator
        sceneAnimationEnabled
        barStyle={{
            backgroundColor: "white",
        }}
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: (props) => <TabIcon iconProps={props} routeName={route.name} />,
            tabBarLabelStyle: {
                fontSize: 17,
            },
        })}
        activeColor="#55bb18"
    >
        <TabAndroid.Screen name="Tab1Screen" options={{ title: "Tab 1" }} component={Tab1Screen} />
        <TabAndroid.Screen name="Tab2Screen" options={{ title: "Top Tabs" }} component={TopTabNavigator} />
        <TabAndroid.Screen name="Tab3Screen" options={{ title: "Stack" }} component={StackNavigator} />
    </TabAndroid.Navigator>
);

export const BottomTabNavigator = () => (Platform.OS === "ios" ? <BottomTabIos /> : <BottomTabAndroid />);
