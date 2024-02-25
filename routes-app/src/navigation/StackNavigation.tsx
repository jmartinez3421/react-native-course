import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PermissionsScreen } from "@/screens/PermissionsScreen";
import { MapScreen } from "@/screens/MapScreen";
import { usePermissionsContext } from "@/contexts/PermissionContext";
import { PermissionStatus } from "expo-modules-core";
import { LoadingScreen } from "@/screens/LoadingScreen";

export type RootStackParamList = {
    Permissions: undefined;
    Map: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {
    const { permissions } = usePermissionsContext();
    const [loadNavigation, setLoadNavigation] = React.useState<boolean>(false);

    if (permissions.locationStatus === PermissionStatus.UNDETERMINED && !loadNavigation) {
        setTimeout(() => {
            setLoadNavigation(true);
        }, 3000);
        return <LoadingScreen />;
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "#fff" },
            }}
        >
            {permissions.locationStatus === PermissionStatus.GRANTED ? (
                <Stack.Screen name="Map" component={MapScreen} />
            ) : (
                <Stack.Screen name="Permissions" component={PermissionsScreen} />
            )}
        </Stack.Navigator>
    );
};
