import React from "react";
import { getColors } from "react-native-image-colors";

type Color = {
    value: string;
    name: string;
};

type ColorsState = {
    colorOne: Color;
    colorTwo: Color;
    colorThree: Color;
    colorFour: Color;
};

const initialState = {
    colorOne: { value: "", name: "" },
    colorTwo: { value: "", name: "" },
    colorThree: { value: "", name: "" },
    colorFour: { value: "", name: "" },
};

export const useImageColors = (imageSrc: string) => {
    const [bgColor, setBgColor] = React.useState("#d2d4d4");
    const [colors, setColors] = React.useState<ColorsState>(initialState);

    const isMounted = React.useRef(true);

    const getImageColors = async (uri: string) => {
        try {
            const result = await getColors(uri, {
                fallback: "#000000",
                pixelSpacing: 5,
                quality: "low",
            });

            switch (result.platform) {
                case "android":
                case "web":
                    return {
                        colorOne: { value: result.dominant, name: "Dominant" },
                        colorTwo: { value: result.lightVibrant, name: "LightVibrant" },
                        colorThree: { value: result.vibrant, name: "Vibrant" },
                        colorFour: { value: result.muted, name: "Muted" },
                    };
                case "ios":
                    return {
                        colorOne: { value: result.background, name: "background" },
                        colorTwo: { value: result.detail, name: "detail" },
                        colorThree: { value: result.primary, name: "primary" },
                        colorFour: { value: result.secondary, name: "secondary" },
                    };
                default:
                    return undefined;
            }
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getImageColors(imageSrc).then((result) => {
            if (result && isMounted.current) {
                setColors(result);
                setBgColor(result.colorOne.value);
            }
        });

        return () => {
            isMounted.current = false;
        };
    }, []);

    return {
        bgColor,
        colors,
    };
};
