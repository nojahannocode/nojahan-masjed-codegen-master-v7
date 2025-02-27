import React, { useEffect } from "react";
import { registerComponent } from "@plasmicapp/host";
import { useGlobalStore } from "./GlobalState";

// Define props for the component
interface GlobalStateSetterProps {
    keyName: string;
    value: any;
}

// Component to set global state
export const GlobalStateSetter: React.FC<GlobalStateSetterProps> = ({ keyName, value }) => {
    const { setGlobalData } = useGlobalStore();

    useEffect(() => {
        if (keyName) {
            setGlobalData((prev) => ({ ...prev, [keyName]: value }));
        }
    }, [keyName, value, setGlobalData]);

    return null; // Invisible component
};
