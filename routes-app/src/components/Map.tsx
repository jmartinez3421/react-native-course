import React from "react";
import { Platform, StyleSheet } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { Location } from "@/infrastructure/interfaces/location";
import { FAB } from "@/components/FAB";
import { useLocationContext } from "@/contexts/LocationContext";

interface Props {
    showsUserLocation?: boolean;
    initialLocation: Location;
}

export const Map = ({ showsUserLocation = true, initialLocation }: Props) => {
    const mapRef = React.useRef<MapView>(null);
    const cameraLocation = React.useRef<Location>(initialLocation);

    const [isFollowingUser, setIsFollowingUser] = React.useState(true);
    const [isShowingPolyline, setIsShowingPolyline] = React.useState(true);

    const { getLocation, lastKnownLocation, watchLocation, clearWatchLocation, userLocations } = useLocationContext();

    const moveToLocation = (location: Location) => {
        if (!mapRef.current) {
            return;
        }

        mapRef.current.animateCamera({ center: location, zoom: 15 });
    };

    const moveToCurrentLocation = async () => {
        if (!lastKnownLocation) {
            const location = await getLocation();
            if (!location) {
                return;
            }
            moveToLocation(location);
        } else {
            moveToLocation(lastKnownLocation);
        }
    };

    React.useEffect(() => {
        watchLocation();
        return () => {
            clearWatchLocation();
        };
    }, []);

    React.useEffect(() => {
        if (lastKnownLocation && isFollowingUser) {
            moveToLocation(lastKnownLocation);
        }
    }, [lastKnownLocation, isFollowingUser]);

    return (
        <>
            <MapView
                ref={mapRef}
                style={styles.map}
                showsUserLocation={showsUserLocation}
                provider={Platform.OS === "ios" ? undefined : PROVIDER_GOOGLE}
                onTouchStart={() => setIsFollowingUser(false)}
                region={{
                    latitude: cameraLocation.current.latitude,
                    longitude: cameraLocation.current.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {/*<Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    title="This is a marker"
                    description="This is a marker example"
                    image={require("../assets/custom-marker.png")}
                />*/}
                {isShowingPolyline && <Polyline coordinates={userLocations} strokeWidth={5} />}
            </MapView>
            <FAB icon="Compass" onPress={moveToCurrentLocation} style={styles.compassBtn} />
            <FAB
                icon={isFollowingUser ? "Footprints" : "PersonStanding"}
                onPress={() => setIsFollowingUser((prev) => !prev)}
                style={styles.followBtn}
            />
            <FAB
                icon={isShowingPolyline ? "RouteOff" : "Route"}
                onPress={() => setIsShowingPolyline((prev) => !prev)}
                style={styles.polylineBtn}
            />
        </>
    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    compassBtn: {
        bottom: 20,
        right: 20,
    },
    followBtn: {
        bottom: 80,
        right: 20,
    },
    polylineBtn: {
        bottom: 140,
        right: 20,
    },
});
