import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ChatScreen } from "../screens/TopScreens/ChatScreen.tsx";
import { ContactScreen } from "../screens/TopScreens/ContactScreen.tsx";
import { AlbumsScreen } from "../screens/TopScreens/AlbumsScreen.tsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform, Text } from "react-native";

export type RootTopTabParams = {
    ChatScreen: undefined;
    ContactScreen: undefined;
    AlbumsScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTopTabParams>();

type TabBarIconProps = {
    color: string;
    focused: boolean;
};

const TabIcon = ({ props, routeName }: { props: TabBarIconProps; routeName: keyof RootTopTabParams }) => {
    const icon = React.useMemo(() => {
        switch (routeName) {
            case "ChatScreen":
                return "Ch";
            case "ContactScreen":
                return "Ct";
            case "AlbumsScreen":
                return "Al";
            default:
                return "";
        }
    }, [routeName]);

    return <Text style={{ color: props.color }}>{icon}</Text>;
};

export const TopTabNavigator = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={Platform.OS === "ios" ? { paddingTop: insets.top } : {}} // Only for iOS
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "#55bb18",
                tabBarPressColor: "rgba(85,187,24,0.56)",
                tabBarIndicatorStyle: {
                    backgroundColor: "#55bb18",
                },
                tabBarStyle: {
                    shadowColor: "transparent",
                    elevation: 0,
                },
                tabBarShowIcon: true,
                tabBarIcon: (props) => <TabIcon props={props} routeName={route.name} />,
            })}
            sceneContainerStyle={{
                backgroundColor: "white",
                padding: 20,
            }}
        >
            <Tab.Screen name="ChatScreen" options={{ title: "Chat" }} component={ChatScreen} />
            <Tab.Screen name="ContactScreen" options={{ title: "Contact" }} component={ContactScreen} />
            <Tab.Screen name="AlbumsScreen" options={{ title: "Albums" }} component={AlbumsScreen} />
        </Tab.Navigator>
    );
};
