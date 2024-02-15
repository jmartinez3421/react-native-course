import React from "react";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Stat, StatType } from "@/types/pokemon.types";

const StatBar = ({ stat, value, percentage }: { stat: StatType; value: number; percentage: number }) => {
    const { styles } = useStyles(stylesheet);

    const color = React.useMemo(() => {
        switch (stat) {
            case "hp":
                return "#EB9486";
            case "attack":
                return "#7E7F9A";
            case "defense":
                return "#d3d3d3";
            case "special-attack":
                return "#F3DE8A";
            case "special-defense":
                return "#A7C4BC";
            case "speed":
                return "#7FB685";
            default:
                return "#f1f1f1";
        }
    }, [stat]);

    return (
        <View style={styles.statBarContainer}>
            <Text style={styles.statValue}>{value}</Text>
            <Text style={styles.statName}>{stat}</Text>
            <View style={[styles.statBar, { width: `${percentage}%`, backgroundColor: color }]} />
        </View>
    );
};

export const StatsChart = ({ stats }: { stats: Stat[] }) => {
    const { styles } = useStyles(stylesheet);

    const mappedStats = React.useMemo(() => {
        const maxStat = Math.max(...stats.map((s) => s.base_stat));
        return stats.map((stat) => ({ ...stat, percentage: (stat.base_stat * 90) / maxStat }));
    }, [stats]);

    return (
        <View style={styles.container}>
            {mappedStats.map((stat) => (
                <StatBar
                    key={stat.stat.name}
                    stat={stat.stat.name}
                    value={stat.base_stat}
                    percentage={stat.percentage}
                />
            ))}
        </View>
    );
};

const stylesheet = createStyleSheet(() => ({
    container: {
        marginTop: 5,
        flexDirection: "column",
        justifyContent: "center",
        rowGap: 10,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#f1f1f1",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    statBarContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 20,
        position: "relative",
    },
    statBar: {
        height: 30,
        borderRadius: 5,
    },
    statName: {
        position: "absolute",
        fontSize: 16,
        zIndex: 1,
        left: 50,
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    statValue: {
        fontSize: 16,
        fontWeight: "500",
    },
}));
