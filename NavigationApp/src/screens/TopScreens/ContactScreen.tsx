import React from "react";
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from "react-native";
import { StyledButton } from "../../components/StyledButton.tsx";
import { useAuthContext } from "../../context/AuthContext.tsx";
import { appStyles } from "../../themes/StackTheme.tsx";

export const ContactScreen = () => {
    const { signIn, authState: { isLogged } } = useAuthContext();

    const [username, setUsername] = React.useState("");

    const handleUsernameChange = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setUsername(event.nativeEvent.text);
    }

    const handleSignIn = () => {
        signIn(username);
    }

    return (
        <View>
            {!isLogged ? (
                <>
                    <TextInput placeholder="Username" style={appStyles.input} value={username} onChange={handleUsernameChange} />
                    <StyledButton title="Sign In" onPress={handleSignIn} />
                </>
            ): <Text>You are already logged!</Text>}
        </View>
    );
};
