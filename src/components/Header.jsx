import React from "react";
import { HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
  
    <HStack p={"5"} shadow={"dark-lg"} bgColor={"blackAlpha.900"} marginBottom={"10"} justifyContent={"space-around"} >
      <Button
      _hover={{ color: "black", bgColor: "white" }}
      color="white"
      fontSize={"28px"}
      bg="transparent"
      borderColor="white"
      borderWidth="0px"
      textShadow="0px 0px 5px white" 
    >
        <Link to="/">Home</Link>
      </Button>
      <Button
      _hover={{ color: "black", bgColor: "white" }}
      color="white"
      fontSize={"28px"}
      bg="transparent"
      borderColor="white"
      borderWidth="0px"
      textShadow="0px 0px 5px white" 
     >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button
      _hover={{ color: "black", bgColor: "white" }}
      color="white"
      fontSize={"28px"}
      bg="transparent"
      borderColor="white"
      borderWidth="0px"
      textShadow="0px 0px 5px white" 
      
      >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>

  );
};

export default Header;
