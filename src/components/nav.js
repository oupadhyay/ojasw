import React from "react";
import { Box, Text, Flex } from "theme-ui";

import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

import { Buttons } from "@carbonplan/components";
import { Link } from "gatsby";
import logo from "../images/logo1.png"

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
      <Box>
        <Link to={"/"}>
          <img src={logo} alt="" height="100" />
        </Link>
      </Box>
      <Box sx={{ mx: "auto" }}></Box>
      <Box>
        <br /><br />
        <Text sx={{ fontSize: [1, null, null, null], letterSpacing: "smallcaps", paddingTop: "100" }}>
          MATH, CODE, AND OTHER CURIOSITIES.
        </Text>
      </Box>
      <Box sx={{ mx: "auto" }}></Box>
      <Box sx={{ paddingTop: "100" }}>
        <br />
        <Navlink to="/about"> About Me </Navlink>
        <Navlink to="/"> Blog </Navlink>
        <Navlink external={true} to="/resume"> Resume </Navlink>
      </Box>
    </Flex>
  </Box>
);

export default Navbar;
