import React from "react";
import { registerComponent } from "@plasmicapp/host";
import { useGlobalStore } from "./GlobalState";

// Define props
interface GlobalStateReaderProps {
    keyName: string;
}

// Component to read global state
export const GlobalStateReader: React.FC<GlobalStateReaderProps> = ({ keyName }) => {
    const { globalData } = useGlobalStore();

    return <div>{globalData[keyName] !== undefined ? globalData[keyName] : ''}</div>;
};


