import { registerFunction } from "@plasmicapp/host";

/**
 * Retrieves a value from localStorage by key.
 * @param key - The localStorage key to retrieve data from.
 * @returns The value stored in localStorage, or null if not found.
 */
export function getLocalStorageValue(key: string): string | null {
    if (typeof window !== "undefined") {
        return localStorage.getItem(key);
    }
    return null;
}

// Register function in Plasmic Studio
export const getLocalStorageValueMeta = {
    name: "getLocalStorageValue",
    importPath: "@/angel/getLocalStorageValue",
    displayName: "Get LocalStorage Value",
    description: "Retrieves a value from localStorage using a key",
    parameters: [
        {
            name: "key",
            type: "string",
            displayName: "Key",
            description: "The key to look up in localStorage",
        },
    ],
    returnType: "string",
    func: getLocalStorageValue,
}
