import {
  Box,
  Center,
  Flex,
  Spacer,
  Text,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import { chatGreen } from "../assets/images";

export default function Footer() {
  const today = new Date();
  const direction = useBreakpointValue({ base: "column", md: "row" });
  return (
    <Box pos="relative" bg="#060809" overflow="hidden">
      <Flex
        direction={direction}
        bg="#1B1C20"
        w="100%"
        p={5}
        justifyContent="space-between"
        overflow="hidden"
        mt={"20px"}
        px={"7.5%"}
      >
        <Center order={{ sm: 2, lg: 0, md: 0 }} mt={{ sm: 2, lg: 0 }}>
          <Text color="#A8A8A8" fontSize="12px">
            Webdesign by BusyBridge Media &copy; {today.getFullYear()}
          </Text>
        </Center>

        <Spacer />

        <Flex
          gap={[5, 5, 5, 5, 5]}
          color="#A8A8A8"
          order={[1, 1, 2]}
          alignSelf={"center"}
        >
          <Image src={chatGreen} boxSize={"13px"} />
          <Image src={chatGreen} boxSize={"13px"} />
        </Flex>
      </Flex>
    </Box>
  );
}
