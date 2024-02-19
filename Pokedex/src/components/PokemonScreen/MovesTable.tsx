import React from "react";
import { Move } from "@/types/pokemon.types";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { View, Text } from "react-native";

const getLearnMethod = (move: Move) => {
    if (!move.version_group_details[0]) {
        return "Unknown";
    }
    if (move.version_group_details[0].move_learn_method.name === "machine") {
        return "TM";
    }
    if (move.version_group_details[0].move_learn_method.name === "egg") {
        return "Egg";
    }
    return `Lvl. ${move.version_group_details[0].level_learned_at}`;
};

export const MovesTable = ({ moves }: { moves: Move[] }) => {
    const { styles } = useStyles(stylesheet);

    const mappedMoves = React.useMemo(
        () =>
            moves.map((move) => ({
                name: move.move.name,
                learnMethod: getLearnMethod(move),
            })),
        [moves]
    );

    const sortedMoves = React.useMemo(
        () =>
            mappedMoves.sort((a, b) => {
                if (a.learnMethod === "TM") {
                    return 1;
                }
                if (b.learnMethod === "TM") {
                    return -1;
                }
                if (a.learnMethod === "Egg") {
                    return 1;
                }
                if (b.learnMethod === "Egg") {
                    return -1;
                }
                if (a.learnMethod !== "TM" && b.learnMethod !== "TM") {
                    const aLvl = Number(a.learnMethod.split(" ")[1]);
                    const bLvl = Number(b.learnMethod.split(" ")[1]);
                    if (aLvl < bLvl) {
                        return -1;
                    }
                    if (aLvl > bLvl) {
                        return 1;
                    }
                }
                return a.learnMethod.localeCompare(b.learnMethod);
            }),
        [mappedMoves]
    );

    return (
        <View style={styles.container}>
            <View style={[styles.header, styles.row]}>
                <View style={styles.headerCell}>
                    <Text style={styles.headerCellText}>Name</Text>
                </View>
                <View style={styles.headerCell}>
                    <Text style={styles.headerCellText}>Learn method</Text>
                </View>
            </View>
            {sortedMoves.map((move) => (
                <View style={[styles.row]} key={move.name}>
                    <View style={styles.cell}>
                        <Text style={[styles.cellText, styles.capitalize]}>{move.name}</Text>
                    </View>
                    <View style={styles.cell}>
                        <Text style={styles.cellText}>{move.learnMethod}</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    container: {
        marginTop: 10,
    },
    header: {
        borderBottomWidth: 1,
        borderColor: "#303030",
    },
    headerCell: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: "#303030",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
    },
    headerCellText: {
        fontWeight: "bold",
        fontSize: 18,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: "#303030",
    },
    cellText: {
        fontSize: 16,
        fontWeight: "500",
    },
    capitalize: {
        textTransform: "capitalize",
    },
}));
