import { Box, Center, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { Custom } from "./Custom";
import { bag, flier, mug, pc, shirt, stationary } from "../assets/images";

function Services() {
  const customData = [
    {
      title: "Business Stationery",
      img: stationary,
      subtitle:
        "We print quality business cards, letterheads, envelopes, receipts, IDs etc.",
    },
    {
      title: "Marketing Materials",
      img: flier,
      subtitle:
        "We print stickers, flyers, posters, banners and other marketing materials.",
    },
    {
      title: "Packaging Materials",
      img: bag,
      subtitle:
        "We print paper bags, nylon bags, gift boxes, product packs, food packs etc.",
    },
    {
      title: "Branded Clothing",
      img: shirt,
      subtitle:
        "We print t-shirts, face caps, towels, uniforms and all kinds of clothing materials.",
    },
    {
      title: "Gifts & Souvenirs",
      img: mug,
      subtitle:
        "We provide branded souvenirs like pens, notepads, mugs, wristbands etc.",
    },
    {
      title: "Website Design",
      img: pc,
      subtitle:
        "We build websites designed to promote your brand and business effectively.",
    },
  ];

  return (
    <Box bg="#EEEEEE">
      <Center>
        <Heading fontSize="24px" mt={7}>
          Our Services Include…
        </Heading>
      </Center>

      <Center mt={5} position="relative">
        <SimpleGrid
          columns={[1, null, 3]}
          spacing={6}
          justifyContent="center"
          alignItems="center"
          w={"88%"}
          ms={"4%"}
          mb={12}
        >
          {customData.map((data, index) => (
            <Center key={index}>
              <Custom
                title={data.title}
                img={data.img}
                subtitle={data.subtitle}
                service
              />
            </Center>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
}

export default Services;
