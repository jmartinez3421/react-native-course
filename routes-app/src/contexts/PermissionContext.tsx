import * as Location from "expo-location";
import { PermissionStatus } from "expo-location";
import React from "react";
import { AppState, Linking } from "react-native";

export interface PermissionState {
    locationStatus: PermissionStatus;
}

type PermissionContextProps = {
    permissions: PermissionState;
    requestLocationPermission: () => void;
    checkLocationPermission: () => void;
};

const permissionInitialState: PermissionState = {
    locationStatus: PermissionStatus.UNDETERMINED,
};

const permissionContextInitialState: PermissionContextProps = {
    permissions: permissionInitialState,
    requestLocationPermission: () => {},
    checkLocationPermission: () => {},
};

export const PermissionsContext = React.createContext<PermissionContextProps>(permissionContextInitialState);

export const PermissionsProvider = ({ children }: { children: React.ReactNode }) => {
    const [permissions, setPermissions] = React.useState<PermissionState>(permissionInitialState);

    const requestLocationPermission = async () => {
        const { status, canAskAgain } = await Location.requestForegroundPermissionsAsync();

        if (status === PermissionStatus.DENIED && !canAskAgain) {
            Linking.openSettings();
        }

        setPermissions({ ...permissions, locationStatus: status });
    };

    const checkLocationPermission = async () => {
        const { status } = await Location.getForegroundPermissionsAsync();
        setPermissions({ ...permissions, locationStatus: status });
    };

    React.useEffect(() => {
        const listener = AppState.addEventListener("change", (nextAppState) => {
            if (nextAppState === "active") {
                checkLocationPermission();
            }
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                requestLocationPermission,
                checkLocationPermission,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};

export const usePermissionsContext = () => React.useContext(PermissionsContext);
