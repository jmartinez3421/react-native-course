import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StyledButton } from "@/components/layout/StyledButton";
import { usePermissionsContext } from "@/contexts/PermissionContext";

export const PermissionsScreen = () => {
    const { requestLocationPermission, permissions } = usePermissionsContext();

    return (
        <View style={styles.container}>
            <StyledButton title="Permissions" onPress={requestLocationPermission} />
            <Text>{JSON.stringify(permissions)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 20,
    },
});
