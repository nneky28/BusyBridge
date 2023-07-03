import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { logo } from "../assets/images";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="row"
      justifyContent={"space-between"}
      px={"6%"}
      position="fixed"
      top="0"
      zIndex="10"
      bg="black"
      boxShadow="lg"
      overflow={"hidden"}
      h={"13%"}
    >
      <Box bg="black" mt={3}>
        <Image
          p={isScrolled ? 2 : 0}
          src={logo}
          objectFit={"contain"}
          style={{ width: "110px", height: "55px" }}
        />
      </Box>
      <Box mt={8} mr={7} display={{ sm: "none", lg: "flex" }}>
        <Heading as="h6" size="sm" color={"#2eba00"}>
          Home
        </Heading>
      </Box>
    </Box>
  );
}

export default Navbar;
