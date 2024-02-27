import React, {useState} from "react";
import { SETTINGS_COLORS } from "../utils/constants";
import useLocalStorage from "./useLocalStorage";

function useColors() {
    const [colors, setColors] = useLocalStorage("colors", SETTINGS_COLORS);
    
    const reset = () => {
        setColors(SETTINGS_COLORS);
    }
    return [colors, setColors, reset];
}

export default useColors;