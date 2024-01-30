import React from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { HeaderTitle } from "../components/HeaderTitle";
import { StyledButton } from "../components/StyledButton";
import { BlurView } from "expo-blur";

export const ModalScreen = () => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <HeaderTitle title="Modal" />
            <StyledButton onPress={() => setModalVisible(true)} label="Open modal" />

            <Modal
                animationType="fade"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.modalBackground}>
                    <BlurView style={styles.backdrop} intensity={10}>
                        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                            <View style={{ flex: 1 }} />
                        </TouchableWithoutFeedback>
                    </BlurView>
                    <View style={styles.modalBox}>
                        <HeaderTitle title="Modal" />
                        <Text>Body</Text>
                        <StyledButton onPress={() => setModalVisible(false)} label="Close modal" />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalBox: {
        backgroundColor: "#fff",
        width: "90%",
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 10,
        rowGap: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.3)",
    },
});
