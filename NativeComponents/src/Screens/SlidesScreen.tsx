import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Slide, SLIDER_DATA } from "../data/SliderData";
import { StyledButton } from "../components/StyledButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "../navigation/StackNavigator";
const Pagination = ({
    index,
    numberOfData,
    onClick,
}: {
    index: number;
    numberOfData: number;
    onClick: (index: number) => void;
}) => {
    const { fadeIn, fadeOut, opacity } = useAnimation();

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const showButton = React.useMemo(() => index === numberOfData - 1, [index, numberOfData]);

    React.useEffect(() => {
        if (showButton) {
            fadeIn();
        } else {
            fadeOut();
        }
    }, [showButton]);

    return (
        <View style={styles.paginationContainer}>
            <View style={styles.pagination}>
                {Array.from(Array(numberOfData).keys()).map((_, i) => (
                    <TouchableOpacity key={i} onPress={() => onClick(i)}>
                        <View
                            style={{
                                ...styles.dot,
                                backgroundColor: i === index ? "purple" : "gray",
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
            <Animated.View style={{ opacity }}>
                <StyledButton
                    onPress={() => navigation.navigate("HomeScreen")}
                    label="Start"
                    icon="chevron-forward-outline"
                    disabled={!showButton}
                />
            </Animated.View>
        </View>
    );
};

import { useAnimation } from "../hooks/useAnimation";

const SlideItem = ({ item }: { item: Slide }) => {
    return (
        <View style={styles.slideContainer}>
            <Image source={item.img} style={styles.sliderImg} />
            <Text style={styles.sliderTitle}>{item.title}</Text>
            <Text style={styles.sliderDesc}>{item.desc}</Text>
        </View>
    );
};

export const SlidesScreen = () => {
    const carouselRef = React.useRef<ICarouselInstance>(null);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handlePaginationClick = (index: number) => {
        setActiveIndex(index);
        if (carouselRef.current) {
            carouselRef.current.scrollTo({ index });
        }
    };

    const width = Dimensions.get("window").width;
    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={width}
                data={SLIDER_DATA}
                renderItem={SlideItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Pagination index={activeIndex} numberOfData={SLIDER_DATA.length} onClick={handlePaginationClick} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: -10,
        justifyContent: "center",
        paddingVertical: 50,
    },
    slideContainer: {
        justifyContent: "center",
        padding: 40,
    },
    sliderImg: {
        width: 350,
        height: 400,
        resizeMode: "center",
    },
    sliderTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "purple",
    },
    sliderDesc: {
        fontSize: 16,
        fontWeight: "normal",
        marginBottom: 20,
    },
    paginationContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    pagination: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 15,
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "gray",
    },
});
