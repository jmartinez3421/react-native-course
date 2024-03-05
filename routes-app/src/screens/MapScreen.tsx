import React from "react";
import { StyleSheet, View } from "react-native";
import { Map } from "@/components/Map";
import { useLocationContext } from "@/contexts/LocationContext";
import { LoadingScreen } from "@/screens/LoadingScreen";

export const MapScreen = () => {
    const { lastKnownLocation, getLocation } = useLocationContext();

    React.useEffect(() => {
        if (!lastKnownLocation) {
            getLocation();
        }
    }, []);

    if (!lastKnownLocation) {
        return <LoadingScreen />;
    }

    return (
        <View style={styles.container}>
            <Map initialLocation={lastKnownLocation} showsUserLocation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
