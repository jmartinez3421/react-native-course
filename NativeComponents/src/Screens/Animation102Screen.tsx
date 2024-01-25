import React from "react";
import { Animated, PanResponder, StyleSheet, View } from "react-native";

export const Animation102Screen = () => {
    const pan = React.useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: true,
            }).start();
        },
    });

    return (
        <View style={styles.container}>
            <Animated.View
                style={{
                    ...styles.box,
                    transform: [
                        {
                            translateX: pan.getLayout().left,
                        },
                        {
                            translateY: pan.getLayout().top,
                        },
                    ],
                }}
                {...panResponder.panHandlers}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 20,
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: "orangered",
        borderRadius: 20,
    },
});
