// Semantic theme based on the raw values

// breakpoint values
export const breakpoints = ["40em", "52em", "64em"];

export const colors = {
  text: gray[2],
  // background are "levels" of content. lighter backgrounds are "closer to the user" than darker ones
  backgrounds: [gray[9], gray[7], gray[5]]
};

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// typographic scale
export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

export const lineHeights = [1, 1.125, 1.25, 1.5];

export const fontWeights = {
  normal: 500,
  bold: 700
};

export const letterSpacings = {
  normal: "normal",
  caps: "0.25em"
};

// border-radius
export const radii = [0, 2, 4, 8];

export const borders = [0, "1px solid", "2px solid"];

export const shadows = [
  `0 1px 2px 0 ${colors.text}`,
  `0 1px 4px 0 ${colors.text}`
];
