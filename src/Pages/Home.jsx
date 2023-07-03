import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";
import Description from "../Components/Description";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Why from "../Components/Why";
import Footer from "../Components/Footer";

function Home() {
  return (
    <Box overflow={"hidden"} w={"100%"}>
      <Navbar />
      <Hero />
      <Description />
      <Services />
      <Projects />
      <Why />
      <Footer />
    </Box>
  );
}

export default Home;
