import React from "react";
import { StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { appStyles } from "../../themes/StackTheme.tsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableIcon } from "../../components/TouchableIcon.tsx";
import { useAuthContext } from "../../context/AuthContext.tsx";

export const Tab1Screen = () => {
    const inset = useSafeAreaInsets();

    const { authState, changeFavoriteIcon } = useAuthContext();
    const { isLogged, favoriteIcon } = authState;

    const handleIconPress = (icon: string) => {
        changeFavoriteIcon(icon);
    }

    return (
        <View style={[appStyles.container, styles.iconsContainer, { paddingTop: inset.top }]}>
            <TouchableIcon
                icon="american-football-outline"
                onPress={() => handleIconPress("american-football-outline")}
                size={75}
                disabled={!isLogged}
                color={favoriteIcon === "american-football-outline" ? "#55bb18" : "#303030"}
            />
            <TouchableIcon
                icon="bandage-outline"
                onPress={() => handleIconPress("bandage-outline")}
                size={75} disabled={!isLogged}
                color={favoriteIcon === "bandage-outline" ? "#55bb18" : "#303030"}
            />
            <TouchableIcon
                icon="beer-outline"
                onPress={() => handleIconPress("beer-outline")}
                size={75}
                disabled={!isLogged}
                color={favoriteIcon === "beer-outline" ? "#55bb18" : "#303030"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
