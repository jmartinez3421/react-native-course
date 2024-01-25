import React from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
    const opacity = React.useRef(new Animated.Value(0)).current;
    const position = React.useRef(new Animated.Value(0)).current;

    const fadeIn = React.useCallback(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    const fadeOut = React.useCallback(() => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    const startMovingPosition = React.useCallback(
        (initPosition: number = -100, endPosition: number = 0, duration: number = 700) => {
            position.setValue(initPosition);

            Animated.timing(position, {
                toValue: endPosition,
                duration,
                useNativeDriver: true,
                easing: Easing.bounce,
            }).start();
        },
        [position]
    );

    const fadeInMoving = React.useCallback(
        (initPosition?: number, endPosition?: number, duration?: number) => {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();

            startMovingPosition(initPosition, endPosition, duration);
        },
        [opacity, startMovingPosition]
    );

    const fadeOutMoving = React.useCallback(
        (initPosition?: number, endPosition?: number, duration?: number) => {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            startMovingPosition(initPosition, endPosition, duration);
        },
        [opacity, startMovingPosition]
    );

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition,
        fadeInMoving,
        fadeOutMoving,
    };
};
