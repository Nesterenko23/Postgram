import { extendTheme } from "@chakra-ui/react";

//colors
const colors = {
  primary: {
    100: "#938f98",
    200: "#817c87",
    300: "#6f6975",
    400: "#5d5764",
    500: "#4B4453",
    600: "#443d4b",
    700: "#3c3642",
    800: "#35303a",
    900: "#2d2932",
  },
};

//components
const Input = {
  defaultProps: {
    focusBorderColor: "primary.100",
  },
};

const Button = {
  defaultProps: {
    colorScheme: "primary",
  },
};


//global styles
const global = {
  a: {
    color: "gray",
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Input,
    Button,
  },
  styles: {
    global,
  },
});
