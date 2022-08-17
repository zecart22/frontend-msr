import { extendTheme } from "@chakra-ui/react";

const colors = {
  theme: {
    red: "#9F0101",
    wine: "#5B0101",
    pink: "#F39494",
    orange: "#F69420",
    gray50: "#ECE7E7",
    gray100: "#8A7F7F",
    grafit: "#211D1D",
    yellow: "#F8E00C",
    green: "#74F80C",
    blue: "#0CBFF8",
  },
  fonts: {
    heading: "Open Sans",
    subHeading: "Times New Roman",
    body: "Arial Black",
  },
  textStyles: {
    h1: {
      "font-family": "var(--chakra-fonts-subHeading)",
    },
  },
};

const theme = extendTheme({ colors });

export default theme;
