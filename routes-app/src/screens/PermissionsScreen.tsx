import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyledButton } from "@/components/layout/StyledButton";
import { usePermissionsContext } from "@/contexts/PermissionContext";

export const PermissionsScreen = () => {
    const { requestLocationPermission } = usePermissionsContext();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>The app needs to access your location to work properly</Text>
            <StyledButton title="Permissions" onPress={requestLocationPermission} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 25,
    },
    text: {
        fontSize: 18,
        color: "#303030",
        textAlign: "center",
        paddingHorizontal: 30,
    },
});
