import React, { createContext } from "react";

export type ImageColors = {
    primary: string;
    secondary: string;
};

type GradientContextProps = {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
};

const initialState: GradientContextProps = {
    colors: { primary: "transparent", secondary: "transparent" },
    prevColors: { primary: "transparent", secondary: "transparent" },
    setMainColors: () => {},
    setPrevMainColors: () => {},
};

export const GradientContext = createContext(initialState);

export const GradientProvider = ({ children }: { children: React.ReactNode }) => {
    const [actColors, setActColors] = React.useState<ImageColors>(initialState.colors);
    const [prevColors, setPrevColors] = React.useState<ImageColors>(initialState.prevColors);

    const setMainColors = React.useCallback(
        (colors: ImageColors) => {
            setActColors(colors);
        },
        [setActColors]
    );

    const setPrevMainColors = React.useCallback(
        (colors: ImageColors) => {
            setPrevColors(colors);
        },
        [setPrevColors]
    );

    return (
        <GradientContext.Provider
            value={{
                colors: actColors,
                prevColors,
                setMainColors,
                setPrevMainColors,
            }}
        >
            {children}
        </GradientContext.Provider>
    );
};

export const useGradientContext = () => React.useContext(GradientContext);
