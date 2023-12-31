import { Box } from "@chakra-ui/react";
import React from "react";
import { hero } from "../assets/images";

function Hero() {
  return (
    <Box mt={{ sm: "13%", lg: "6%" }}>
      <Box
        backgroundImage={`url(${hero})`}
        backgroundPosition="top"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        width={"100%"}
        h={{ sm: "45vh", lg: "57vh" }}
        overflow={"hidden"}
      />
    </Box>
  );
}

export default Hero;
