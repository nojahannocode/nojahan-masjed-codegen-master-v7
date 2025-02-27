import { registerFunction } from "@plasmicapp/host";

/**
 * Retrieves a value from localStorage by key.
 * @param key - The localStorage key to retrieve data from.
 * @returns The value stored in localStorage, or null if not found.
 */
export function me(key?: string | null): string | null {
    if (typeof window !== "undefined") {
        let auth =  localStorage.getItem('auth');

        try {
            // @ts-ignore
            auth = JSON.parse(auth);
            if(typeof auth === 'object' ) {
                // @ts-ignore
                return key ? auth?.key : auth
            }
            return auth
        }
        catch (error) {
            return null;
        }
    }
    return null;
}

// Register function in Plasmic Studio
export const meMeta = {
    name: "me",
    importPath: "@/angel/me",
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
    func: me,
}
