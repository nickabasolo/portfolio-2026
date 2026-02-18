
/// <reference types="vite/client" />

/**
 * Resolves the absolute path for an asset, accounting for the base URL.
 * This is necessary for GitHub Pages or any deployment where the app is not at the root.
 */
export const getAssetPath = (path: string) => {
    // If the path is already an absolute URL (http/https), return it as is
    if (path.startsWith('http')) {
        return path;
    }

    const base = import.meta.env.BASE_URL;

    // Clean the path to remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // If base is '/', just return /path
    if (base === '/') {
        return `/${cleanPath}`;
    }

    // Otherwise, prepend the base path
    return `${base}${cleanPath}`;
};
