export const adjust = (color, amount) => {
    return ('#' +
        color
            .replace(/^#/, '')
            .replace(/../g, (color) => ('0' +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).slice(-2)));
};
export const isStringHexColor = (color) => {
    // Source - https://stackoverflow.com/a
    // Posted by Royi Namir, modified by community. See post 'Timeline' for change history
    // Retrieved 2025-11-29, License - CC BY-SA 4.0
    return /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i.test(color);
};
export const getContrastColor = (hexcolor, colorForDarkBg, colorForBrightBg) => {
    const r = parseInt(hexcolor.substring(1, 3), 16);
    const g = parseInt(hexcolor.substring(3, 5), 16);
    const b = parseInt(hexcolor.substring(5, 7), 16);
    const yiqColorSpace = (r * 299 + g * 587 + b * 114) / 1000;
    return yiqColorSpace >= 128 ? colorForBrightBg : colorForDarkBg;
};
export const handleCustomColor = (customColor) => {
    const customPrimaryColor = customColor;
    const customSecondaryColor = adjust(customColor, 40);
    const customTertiaryColor = adjust(customColor, -30);
    const customHover = adjust(customPrimaryColor, 5);
    return {
        customPrimaryColor,
        customSecondaryColor,
        customTertiaryColor,
        customHover,
    };
};
//# sourceMappingURL=helper.js.map