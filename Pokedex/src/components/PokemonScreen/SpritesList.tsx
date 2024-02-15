import React from "react";
import { Sprites } from "@/types/pokemon.types";
import { FlatList } from "react-native";
import { FadeInImage } from "@/components/FadeInImage";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const Sprite = ({ sprite }: { sprite: string }) => {
    const { styles } = useStyles(stylesheet);

    return <FadeInImage uri={sprite} style={styles.image} />;
};

export const SpritesList = ({ sprites }: { sprites: Sprites }) => {
    const { styles } = useStyles(stylesheet);

    const spritesList = React.useMemo(
        () => [sprites.front_default, sprites.back_default, sprites.front_shiny, sprites.back_shiny],
        [sprites]
    );

    return (
        <FlatList
            data={spritesList}
            renderItem={({ item }) => <Sprite sprite={item} />}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.list}
        />
    );
};

const stylesheet = createStyleSheet((theme) => ({
    list: {
        marginHorizontal: -theme.margins.xl,
    },
    image: {
        width: 100,
        height: 100,
    },
}));
