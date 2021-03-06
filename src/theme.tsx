import { extendTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  colors: {
    black: "#16161D",
    ghostwhite: "#F8F8FF",
    linkedinBlue: "#01A0DC",
  },
  fonts,
});

export default theme;
