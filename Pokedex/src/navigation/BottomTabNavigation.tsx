import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListScreenNavigation } from "@/navigation/ListScreenNavigation";
import { Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SearchScreenNavigation } from "@/navigation/SearchScreenNavigation";

export type RootTabsParamList = {
    Home: undefined;
    Search: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

export const BottomTabNavigation = () => (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "tomato",
            tabBarLabelStyle: {
                fontSize: 14,
                marginBottom: Platform.OS === "ios" ? 0 : 10,
            },
            tabBarStyle: {
                backgroundColor: "rgba(255, 255, 255, 0.92)",
                borderWidth: 0,
                elevation: 0,
                height: Platform.OS === "ios" ? 90 : 70,
                position: "absolute",
            },
            tabBarIconStyle: {
                width: 20,
                height: 20,
                marginTop: 5,
            },
        }}
        sceneContainerStyle={{
            backgroundColor: "#fff",
        }}
    >
        <Tab.Screen
            name="Home"
            component={ListScreenNavigation}
            options={{
                tabBarLabel: "Pokemon List",
                tabBarIcon: ({ color, size }) => <Ionicons name="list-outline" size={size} color={color} />,
            }}
        />
        <Tab.Screen
            name="Search"
            component={SearchScreenNavigation}
            options={{
                tabBarLabel: "Search",
                tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
            }}
        />
    </Tab.Navigator>
);
