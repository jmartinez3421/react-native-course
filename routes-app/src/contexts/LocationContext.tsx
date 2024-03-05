import { Location } from "@/infrastructure/interfaces/location";
import React from "react";
import { getCurrentLocation, watchCurrentLocation } from "@/helpers/location";
import { LocationSubscription } from "expo-location";

interface LocationState {
    lastKnownLocation?: Location;
    userLocations: Location[];
    getLocation: () => Promise<Location | null>;
    watchLocation: () => void;
    clearWatchLocation: () => void;
}

export const LocationContext = React.createContext<LocationState>({
    lastKnownLocation: { latitude: 0, longitude: 0 },
    userLocations: [],
    getLocation: async () => null,
    watchLocation: () => {},
    clearWatchLocation: () => {},
});

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [lastKnownLocation, setLastKnownLocation] = React.useState<Location>();
    const [userLocations, setUserLocations] = React.useState<Location[]>([]);
    const [watcher, setWatcher] = React.useState<LocationSubscription>();

    const getLocation = async () => {
        try {
            const location = await getCurrentLocation();
            setLastKnownLocation(location);
            return location;
        } catch (error) {
            console.error("Error getting location", error);
            return null;
        }
    };

    const watchLocation = () => {
        watchCurrentLocation((location) => {
            setLastKnownLocation(location);
            setUserLocations((locations) => [...locations, location]);
        }).then((w) => {
            setWatcher(w);
        });
    };

    const clearWatchLocation = () => {
        if (watcher) {
            watcher.remove();
        }
    };

    return (
        <LocationContext.Provider
            value={{ lastKnownLocation, userLocations, getLocation, watchLocation, clearWatchLocation }}
        >
            {children}
        </LocationContext.Provider>
    );
};

export const useLocationContext = () => {
    const context = React.useContext(LocationContext);
    if (!context) {
        throw new Error("useLocation must be used within a LocationProvider");
    }
    return context;
};
