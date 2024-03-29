import React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { SwitchRow } from "../components/SwitchRow";
import { useForm } from "../hooks/useForm";
import { useThemeContext } from "../contexts/themeContext/ThemeContext";

const ValueRow = ({ title, value }: { title: string; value: string | boolean }) => {
    const {
        theme: { colors },
    } = useThemeContext();
    return (
        <View style={styles.valueRow}>
            <Text style={[styles.textBold, { color: colors.text }]}>{title}</Text>
            <Text style={[styles.value, { color: colors.text }]}>{value.toString()}</Text>
        </View>
    );
};

const StyledTextInput = (props: React.ComponentProps<typeof TextInput>) => {
    const {
        theme: { colors },
    } = useThemeContext();
    return (
        <TextInput
            style={{
                ...styles.input,
                ...(props.style as Object),
                borderColor: colors.border,
                color: colors.text,
            }}
            placeholderTextColor={colors.text}
            {...props}
        />
    );
};

export const TextInputScreen = () => {
    const { form, onChange } = useForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{ flex: 1, justifyContent: "space-around" }}>
                    <HeaderTitle title="TextInputs" />
                    <StyledTextInput
                        placeholder="Insert your name"
                        autoCorrect={false}
                        autoCapitalize="words"
                        onChangeText={(value) => onChange(value, "name")}
                    />
                    <StyledTextInput
                        placeholder="Insert your email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={(value) => onChange(value, "email")}
                        keyboardType="email-address"
                    />
                    <StyledTextInput
                        placeholder="Insert your phone"
                        autoCorrect={false}
                        keyboardType="phone-pad"
                        onChangeText={(value) => onChange(value, "phone")}
                    />
                    <StyledTextInput
                        placeholder="Insert your password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(value) => onChange(value, "password")}
                    />

                    <SwitchRow
                        title="Subscribe"
                        value={form.isSubscribed}
                        onChange={(value) => onChange(value, "isSubscribed")}
                    />

                    <View style={styles.valuesContainer}>
                        <ValueRow title="Name" value={form.name} />
                        <ValueRow title="Email" value={form.email} />
                        <ValueRow title="Phone" value={form.phone} />
                        <ValueRow title="Password" value={form.password} />
                        <ValueRow title="Is subscribed" value={form.isSubscribed} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10,
    },
    valuesContainer: {
        marginTop: 30,
        rowGap: 10,
    },
    valueRow: {
        flexDirection: "row",
        columnGap: 10,
    },
    textBold: {
        fontWeight: "bold",
        fontSize: 20,
    },
    value: {
        fontSize: 18,
    },
    container: {
        flex: 1,
    },
});
