import React from "react";
import { Animated, ImageStyle, StyleProp, View, StyleSheet, ActivityIndicator } from "react-native";
import { useAnimation } from "@/hooks/useAnimation";

type Props = {
    uri: string;
    style: StyleProp<ImageStyle>;
};

export const FadeInImage = ({ uri, style }: Props) => {
    const { opacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = React.useState(true);

    const handleOnLoadEnd = () => {
        setIsLoading(false);
        fadeIn();
    };

    return (
        <View style={{ ...styles.container, ...(style as Object) }}>
            {isLoading && <ActivityIndicator style={{ position: "absolute" }} color="grey" size={30} />}

            <Animated.Image
                source={{ uri }}
                onLoadEnd={handleOnLoadEnd}
                style={{
                    ...(style as Object),
                    opacity,
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
