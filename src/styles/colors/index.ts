import { css } from "@emotion/react";

export enum Colors {
    white = "#FFFFFF",
    grey = "#d5d5d5",
    violet = "#bc52ee",
    violetSecondary = "#3245ff",
    richBlack = "#0D1B2A",
    dark = "#101118",
    darkLighter = "#20222e",
}

enum DarkTheme {
    // theme primary colors
    primary = Colors.dark,
    secondary = Colors.darkLighter,
    tertiary = Colors.violet,

    // theme global colors
    bgElement = Colors.dark,
    textDefault = Colors.white,
    textSecondary = Colors.grey,
}

// Use this in normalize css
export const ThemeVar = css`
    :root {
        --primary: ${DarkTheme.primary};
        --secondary: ${DarkTheme.secondary};
        --tertiary: ${DarkTheme.tertiary};

        --bg-element: ${DarkTheme.bgElement};
        --text-default: ${DarkTheme.textDefault};
        --text-secondary: ${DarkTheme.textSecondary};
        --violet: ${Colors.violet};
    }
`;

/**
 * @important USE THIS FOR COLORS!
 */
export const Theme = {
    primary: "var(--primary)",
    secondary: "var(--secondary)",
    tertiary: "var(--tertiary)",
    bgElement: "var(--bg-element)",
    textDefault: "var(--text-default)",
    textSecondary: "var(--text-secondary)",
    violet: "var(--violet)",
};
