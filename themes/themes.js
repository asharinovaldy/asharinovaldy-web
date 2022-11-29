import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
  },
  components: {
    Button: {
      variants: {},
    },
  },
});

export default theme;
