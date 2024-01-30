import { Animated, ImageStyle, StyleProp, View, StyleSheet, ActivityIndicator } from "react-native";
import { useAnimation } from "../hooks/useAnimation";
import React from "react";

type Props = {
    uri: string;
    style: StyleProp<ImageStyle>;
};

export const FadeInImage = ({ uri, style }: Props) => {
    const { opacity, fadeInMoving, position } = useAnimation();
    const [isLoading, setIsLoading] = React.useState(true);

    const handleOnLoadEnd = () => {
        setIsLoading(false);
        fadeInMoving(100, 0, 500);
    };

    return (
        <View style={styles.container}>
            {isLoading && <ActivityIndicator style={{ position: "absolute" }} color="grey" size={30} />}

            <Animated.Image
                source={{ uri }}
                onLoadEnd={handleOnLoadEnd}
                style={{
                    ...(style as Object),
                    opacity,
                    transform: [
                        {
                            translateX: position,
                        },
                    ],
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
});
