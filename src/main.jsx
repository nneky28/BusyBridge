import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `Raleway`,
    body: `Montserrat`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>
);
