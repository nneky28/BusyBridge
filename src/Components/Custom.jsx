import { Box, Center, Heading, Text, Image, Stack } from "@chakra-ui/react";
import React from "react";
// {"53px"}
export const Custom = ({ img, title, subtitle, service }) => {
  return (
    <Center>
      <Stack direction={"row"} spacing={3} align={"center"}>
        <Box>
          <Image
            src={img}
            objectFit="contain"
            boxSize={service ? "58px" : "37px"}
          />
        </Box>
        <Box>
          <Heading
            size="xs"
            fontSize={"16px"}
            color={service ? "black" : "white"}
          >
            {title}
          </Heading>
          <Text
            w={{ sm: "100%", lg: "85%" }}
            fontSize={"14px"}
            color={service ? "black" : "white"}
            mt={1}
          >
            {subtitle}
          </Text>
        </Box>
      </Stack>
    </Center>
  );
};
