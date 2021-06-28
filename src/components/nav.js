import React from "react";
import { Heading, Box, Text, Flex } from "theme-ui";

import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

import { Buttons } from "@carbonplan/components";
import { Link } from "gatsby";
import logo from "../images/logo2.png"

const { ArrowButton } = Buttons;

const Navlink = ({ children, to, external = false }) => {
  const button = (
    <ArrowButton fill="purple" size={"sm"} px={[2, 3]} label={children} />
  );

  return (
    <Box sx={{ my: "auto", pb:[2, 0, 0, 0] }}>
      {external ? <a href={to} target="_blank" rel="noreferrer"> {button} </a> : <Link to={to}> {button} </Link>}
    </Box>
  );
};

const Navbar = () => (
  <Box
    sx={{
      mt: 3,
      pb: 3,
    }}
  >
    <Flex>
      <Heading
        sx={{
          fontWeight: "bold",
          fontSize: [5, 5, 5, 6],
        }}
      >
        <img src={logo} alt="" height="90" />
      </Heading>
      <Box sx={{ mx: "auto" }}></Box>
      <Box>
        <Navlink to="/about"> About Me </Navlink>
        <Navlink to="/"> Blog </Navlink>
        <Navlink external={true} to="/resume"> Resume </Navlink>
      </Box>
    </Flex>
    <Flex>
      <Heading></Heading>
      <Box sx={{ mx: "auto" }}></Box>
      <Box>
        <Text sx={{ fontSize: [1, null, null, null], letterSpacing: "smallcaps", align: "right" }}>
          MATH, CODE, AND OTHER CURIOSITIES.
        </Text>
      </Box>
    </Flex>
  </Box>
);

export default Navbar;
