import { Box, Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <VStack h={"90vh"} justifyContent={"center"}>
      <Box transform={"scale(3)"}>
        <Spinner  color={"green"} size={"xl"}/>
        <h1>Loading</h1>
        <h3>Please wait...</h3>
      </Box>
    </VStack>
  );
};

export default Loader;
