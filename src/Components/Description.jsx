import { Heading, Center, Text, Box } from "@chakra-ui/react";
import React from "react";

function Description() {
  const lineStyle = {
    border: "0.1px solid black",
    width: "84%",
  };
  return (
    <Box bg="#EEEEEE" p={5}>
      <Center>
        <Heading mt={6} size="lg">
          Welcome to BusyBridge
        </Heading>
      </Center>

      <Center mt={3}>
        <Text fontWeight={600}>The Branding Company for SMEs!</Text>
      </Center>

      <Text fontWeight={600} textAlign="center" py={3}>
        We provide printing services to individuals and organisations across
        Nigeria.
      </Text>

      <Text fontWeight={600} textAlign="center" p={{ sm: 3, lg: 0 }}>
        Let’s help you save time, cost and stress on your next project.
      </Text>

      <Center mt={8}>
        <Box style={lineStyle} />
      </Center>
    </Box>
  );
}

export default Description;
