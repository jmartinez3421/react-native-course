import * as ExpoLocation from "expo-location";
import { Location } from "@/infrastructure/interfaces/location";

export const getCurrentLocation = async (): Promise<Location> => {
    const currentLocation = await ExpoLocation.getCurrentPositionAsync();

    return {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
    };
};

export const watchCurrentLocation = (callback: (location: Location) => void) => {
    return ExpoLocation.watchPositionAsync(
        { accuracy: ExpoLocation.LocationAccuracy.BestForNavigation, timeInterval: 1000, distanceInterval: 10 },
        (location) => {
            callback({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        }
    );
};
