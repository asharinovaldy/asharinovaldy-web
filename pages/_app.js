import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/inter";
import theme from "../themes/themes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
