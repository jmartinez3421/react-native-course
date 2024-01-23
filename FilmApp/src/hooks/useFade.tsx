import React from "react";
import { Animated } from "react-native";

/**
 * Custom hook to handle fade in and fade out animation
 * opacity: Animated.Value to handle opacity - use it in Animated.View
 * @param initialOpacity
 */
export const useFade = (initialOpacity = 0) => {
    const opacity = React.useRef(new Animated.Value(initialOpacity)).current;

    const fadeIn = React.useCallback(
        (callback?: () => void) => {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start(callback ? callback : () => {});
        },
        [opacity]
    );

    const fadeOut = React.useCallback(() => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    return {
        fadeIn,
        fadeOut,
        opacity,
    };
};
