import { StyleSheet } from "react-native";

export const stackStyles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        rowGap: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#303030",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#303030",
        marginTop: 30,
    },
    buttonsRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        columnGap: 10,
    },
});
