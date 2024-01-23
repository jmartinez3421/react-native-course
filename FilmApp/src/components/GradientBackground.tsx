import React from "react";
import { StyleSheet, View, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useGradientContext } from "../contexts/GradientContext.tsx";
import { useFade } from "../hooks/useFade.tsx";

export const GradientBackground = ({ children }: { children: React.ReactNode }) => {
    const { colors, prevColors, setPrevMainColors } = useGradientContext();

    const { opacity, fadeIn, fadeOut } = useFade(0.3);

    React.useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut();
        });
    }, [colors]);

    return (
        <View style={styles.background}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, "#fff"]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.5 }}
            />

            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary, "#fff"]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.5 }}
                />
            </Animated.View>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
});
