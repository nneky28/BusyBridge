import {
  Box,
  SimpleGrid,
  Center,
  Heading,
  Image,
  Text,
  Flex,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { Custom } from "./Custom";
import {
  express,
  flierFiesta,
  quality,
  speed,
  starter,
  wallet,
} from "../assets/images";

function Why() {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const customData = [
    {
      title: "Quality Prints",
      img: quality,
      subtitle: "Top quality prints guaranteed all the time.",
    },
    {
      title: "Speedy Delivery",
      img: speed,
      subtitle: "Get your prints delivered in as little as 48hrs.",
    },
    {
      title: "Affordable Prices",
      img: wallet,
      subtitle: "We offer quality prints at affordable prices.",
    },
  ];

  const lineStyle = {
    border: "0.1px solid #2eba00",
    width: "83.5%",
  };
  return (
    <Box bg="black">
      <Box>
        <Center p={2}>
          <Heading fontSize="24px" color={"#2eba00"} mt={6}>
            Why BusyBridge?
          </Heading>
        </Center>

        <Center mt={5} position="relative" p={{ sm: 5, lg: 0 }}>
          <SimpleGrid
            columns={[1, null, 3]}
            spacing={6}
            justifyContent="center"
            alignItems="center"
            w={"95%"}
            ms={"3%"}
          >
            {customData.map((data, index) => (
              <Center key={index}>
                <Custom
                  title={data.title}
                  img={data.img}
                  subtitle={data.subtitle}
                />
              </Center>
            ))}
          </SimpleGrid>
        </Center>
        <Center mt={"40px"}>
          <Box style={lineStyle} />
        </Center>
        <Center p={2}>
          <Heading fontSize="24px" color={"#2eba00"} mt={2}>
            Special Offers!
          </Heading>
        </Center>
        <Center mt={5} position="relative">
          <SimpleGrid
            columns={[1, null, 3]}
            spacing={{ sm: 2, lg: 6 }}
            justifyContent="center"
            alignItems="center"
            w={"84%"}
          >
            <Image src={flierFiesta} objectFit="contain" boxSize={"335px"} />
            <Image src={express} objectFit="contain" boxSize={"335px"} />
            <Image src={starter} objectFit="contain" boxSize={"335px"} />
          </SimpleGrid>
        </Center>
        <Center mt={"40px"}>
          <Box style={lineStyle} />
        </Center>
        <Box>
          <Flex p={"2%"} ms={"6%"} w={"88%"} mt={2} direction={direction}>
            <Box mb={{ sm: 5, lg: 0 }}>
              <Heading fontSize="14px" color={"#2eba00"}>
                Our Services
              </Heading>

              <Text fontSize="12px" color={"#ffff"}>
                - Graphics Design
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                - Print Production
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                - Web Development
              </Text>
            </Box>
            <Spacer />
            <Box mb={{ sm: 5, lg: 0 }}>
              <Heading fontSize="14px" color={"#2eba00"}>
                Follow us on Social
              </Heading>
              <Text fontSize="12px" color={"#ffff"}>
                IG: @busybridgeng
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                FB: @busybridgeng
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                TW: @busybridgeng
              </Text>
            </Box>
            <Spacer />
            <Box mb={{ sm: 5, lg: 0 }}>
              <Heading fontSize="14px" color={"#2eba00"}>
                Contact Us
              </Heading>
              <Text fontSize="12px" color={"#ffff"}>
                08034316193
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                info@busybridgeng.com
              </Text>
              <Text fontSize="12px" color={"#ffff"}>
                22 Shipeolu Street, Onipan, Lagos.
              </Text>
            </Box>
            {/* </SimpleGrid> */}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Why;
