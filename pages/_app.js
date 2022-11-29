import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "@fontsource/inter";
import theme from "../themes/themes";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
