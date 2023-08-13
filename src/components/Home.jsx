import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/doge.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"95vh"}>
      <Text
        textAlign="center"
        paddingTop="5"
        color="white"
        fontWeight="bold"
        fontSize="6xl"
        textTransform={"uppercase"}
        letterSpacing="4px"
        textShadow="0px 0px 8px white"
      >
        Crypto Creek
      </Text>

      <motion.div
        whileTap={{ rotate: 90 }}
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          // filter={"grayscale(1)"}
        />
      </motion.div>
    </Box>
  );
};

export default Home;
