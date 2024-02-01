import React from "react";
import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { Slide, SLIDER_DATA } from "../data/SliderData";

const Pagination = ({
    index,
    numberOfData,
    onClick,
}: {
    index: number;
    numberOfData: number;
    onClick: (index: number) => void;
}) => {
    return (
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
    );
};

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
        <SafeAreaView style={styles.container}>
            <Carousel
                ref={carouselRef}
                loop={false}
                width={width}
                data={SLIDER_DATA}
                renderItem={SlideItem}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <Pagination index={activeIndex} numberOfData={SLIDER_DATA.length} onClick={handlePaginationClick} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: -10,
        paddingVertical: 20,
    },
    slideContainer: {
        flex: 1,
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
    pagination: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 15,
        paddingBottom: 20,
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: "gray",
    },
});
