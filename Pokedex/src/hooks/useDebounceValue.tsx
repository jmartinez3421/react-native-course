import React from "react";

/**
 * Debounce the value to avoid unnecessary re-renders of the component <br/>
 * Each time the value changes, the previous setTimeout is cleared and a new one is set <br/>
 * When the timeout is reached, the debounced value is updated
 */
export const useDebounceValue = (value: string = "", delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = React.useState(value);

    React.useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};
