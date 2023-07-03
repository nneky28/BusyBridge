import {
  Box,
  Center,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  bg,
  mockUp,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  Bone,
  Btwo,
  Bthree,
  Bfour,
  Bfive,
  Bsix,
  Bseven,
  Beight,
  Bnine,
  Bten,
  Beleven,
  Btwelve,
  Bthirteen,
  Bfourteen,
  Bfifteen,
  Bsixteen,
  Bseventeen,
  Beighteen,
  Bnineteen,
  Btwenty,
} from "../assets/images";
import { BsChatTextFill } from "react-icons/Bs";
import Marquee from "react-fast-marquee";

function Projects() {
  const direction = useBreakpointValue({ base: "column", md: "row" });
  const today = new Date();
  const images = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
    { id: 6, img: six },
    { id: 7, img: seven },
    { id: 9, img: nine },
    { id: 10, img: ten },
    { id: 11, img: eleven },
    { id: 12, img: twelve },
    { id: 13, img: thirteen },
    { id: 14, img: fourteen },
    { id: 15, img: fifteen },
    { id: 16, img: sixteen },
    { id: 17, img: seventeen },
    { id: 18, img: eighteen },
    { id: 19, img: nineteen },
    { id: 20, img: twenty },
  ];

  const images1 = [
    { id: 1, img: Bone },
    { id: 2, img: Btwo },
    { id: 3, img: Bthree },
    { id: 4, img: Bfour },
    { id: 5, img: Bfive },
    { id: 6, img: Bsix },
    { id: 7, img: Bseven },
    { id: 9, img: Bnine },
    { id: 10, img: Bten },
    { id: 11, img: Beleven },
    { id: 12, img: Btwelve },
    { id: 13, img: Bthirteen },
    { id: 14, img: Bfourteen },
    { id: 15, img: Bfifteen },
    { id: 16, img: Bsixteen },
    { id: 17, img: Bseventeen },
    { id: 18, img: Beighteen },
    { id: 19, img: Bnineteen },
    { id: 20, img: Btwenty },
  ];
  const handleClick = () => {
    const phoneNumber = "08034316193";
    const message = "Hello, I'd like to get in touch.";

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <Box bg="black">
      <Center>
        <Heading fontSize="24px" mt={7} color={"#2eba00"}>
          Some of our works…
        </Heading>
      </Center>

      <Box mt={8}>
        <Flex>
          <Marquee autoFill={true}>
            {images.map((item, index) => (
              <Box key={index}>
                <Image src={item.img} boxSize={"200px"} objectFit={"contain"} />
              </Box>
            ))}
          </Marquee>
        </Flex>
        <Flex mt={1}>
          <Marquee autoFill={true} direction="right" speed={16.5}>
            {images1.map((item, index) => (
              <Box key={index}>
                <Image src={item.img} boxSize={"200px"} objectFit={"contain"} />
              </Box>
            ))}
          </Marquee>
        </Flex>
      </Box>
      <Center>
        <Heading
          fontSize="24px"
          mt={12}
          color={"#2eba00"}
          w={{ sm: "70%", lg: "100%" }}
          textAlign={"center"}
        >
          Need to print something?
        </Heading>
      </Center>
      <Center>
        <Text
          fontSize={"15px"}
          mt={4}
          color={"white"}
          fontWeight={600}
          w={{ sm: "70%", lg: "100%" }}
          textAlign={"center"}
        >
          Send a message via whatsapp, let’s help you out.
        </Text>
      </Center>
      <Center mt={4}>
        <Text
          as="button"
          border={"2px solid #2eba00"}
          color={"#2eba00"}
          fontWeight={600}
          borderRadius={"full"}
          p={1}
          w={{ lg: "12%", sm: "40%", md: "20%" }}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          py={1}
          fontSize={"14px"}
          onClick={handleClick}
        >
          Get in Touch
          <Box ml={1}>
            <BsChatTextFill size={14} color="#2eba00" />
          </Box>
        </Text>
      </Center>

      <Box
        backgroundImage={`url(${bg})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize={"cover"}
        width={"100%"}
        h={{ sm: "110vh", lg: "80vh", xl: "60vh", md: "90vh" }}
        overflow={"hidden"}
        mt={10}
      >
        <Flex p={9} direction={direction} mt={{ sm: "10%", lg: 2 }}>
          <Box
            w={{ sm: "92%", lg: "50%" }}
            ms={{ sm: 0, md: "5%", lg: "5%", xl: "4.5%" }}
          >
            <Heading color={"#2eba00"} fontSize={{ sm: "28px", lg: "33px" }}>
              Get a website for your business
            </Heading>
            <Text fontWeight={600} mt={3} color={"white"} ms={1}>
              It's {today.getFullYear()}...
            </Text>
            <Text fontWeight={600} mt={2} color={"white"} ms={1}>
              Every business needs a website.
            </Text>
            <Text fontWeight={600} mt={2} color={"white"} ms={1}>
              It’s your office on the web.
            </Text>
            <Text fontWeight={600} mt={2} color={"white"} ms={1}>
              Lets get you a good one.
            </Text>

            <Text
              as="button"
              border={"2px solid transparent"}
              fontWeight={600}
              borderRadius={"full"}
              p={1}
              bg={"white"}
              mt={5}
              ms={1}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              py={1}
              fontSize={"14px"}
              w={{ lg: "25%", sm: "50%" }}
              onClick={handleClick}
            >
              Contact Us
              <Box ml={1}>
                <BsChatTextFill size={14} />
              </Box>
            </Text>
          </Box>
          <Spacer />
          <Box
            w={{ sm: "98%", lg: "50%" }}
            mt={{ sm: 5, lg: 0 }}
            ms={{ sm: 5, lg: 0 }}
          >
            <Image src={mockUp} objectFit={"contain"} w={"90%"} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Projects;
