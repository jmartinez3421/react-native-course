import React from "react";
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { RootDrawerParams } from "../../navigation/DrawerNavigator.tsx";
import { appStyles } from "../../themes/StackTheme.tsx";
import { useAuthContext } from "../../context/AuthContext.tsx";
import { StyledButton } from "../../components/StyledButton.tsx";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends DrawerScreenProps<RootDrawerParams, "Settings"> {}

export const SettingsScreen = ({ navigation }: Props) => {
    const { authState, signIn, logout } = useAuthContext();
    const { isLogged, userName, favoriteIcon } = authState;

    const [newUserName, setNewUserName] = React.useState("");

    const handleUserNameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setNewUserName(event.nativeEvent.text);
    }

    const handleUpdateUserName = () => {
        signIn(newUserName);
    }

    React.useEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);

    return (
        <View style={[appStyles.container, styles.container]}>
            {isLogged ? (
                <>
                    {userName ? <Text style={ styles.user }>Welcome { userName }!!</Text> : (
                        <View style={styles.contentBox}>
                            <Text style={ styles.user }>You don't have a username yet</Text>
                            <TextInput
                                style={ appStyles.input }
                                placeholder="Username"
                                autoCapitalize="none"
                                onChange={ handleUserNameChange }
                                value={ newUserName }
                                />
                            <StyledButton title="Set username" onPress={handleUpdateUserName} />
                        </View>
                    )}
                    {favoriteIcon ? (
                        <View style={styles.contentBox}>
                            <Text style={ styles.icon }>Your favorite icon is:</Text>
                            <Icon name={favoriteIcon} size={100} color="#303030" />
                        </View>
                    ) : (
                        <Text style={ styles.icon }>You don't have a favorite icon yet</Text>
                    )}
                    <StyledButton title="Logout" onPress={logout} />
                </>
            ) : <Text>You are not Logged</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 30,
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    contentBox: {
        alignItems: "center",
        rowGap: 20,
    },
    user: {
        fontSize: 25,
        fontWeight: "500"
    },
    icon: {
        fontSize: 20,
        fontWeight: "400"
    }
});
