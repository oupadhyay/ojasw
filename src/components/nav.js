import React from "react";
import { Heading, Box, Text, Flex } from "theme-ui";

import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

import { Buttons } from "@carbonplan/components";
import { Link } from "gatsby";

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
        <Link to={"/"}>
          <Text sx={{ color: "primary" }}>
            <Text sx={{ color: "purple" }}>Ojasw</Text> Upadhyay{" "}
          </Text>
        </Link>
      </Heading>
      <Box sx={{ mx: "auto" }}></Box>
      <Box>
        <Navlink to="/about"> About Me </Navlink>
        <Navlink to="/"> Blog </Navlink>
        <Navlink external={true} to="https://drive.google.com/file/d/1W4T7fqpxg45Z4tP1IwLmE2UPHbDNQvvS/view?usp=sharing">
          Resume
        </Navlink>
      </Box>
    </Flex>

    <Box mt={[1, 3, 3, 3]} mb={[1, 2, 2, 2]}>
      <Text sx={{ fontSize: [1, null, null, null], letterSpacing: "smallcaps" }}>
        MATH, CODE, AND OTHER CURIOSITIES.
      </Text>
    </Box>
  </Box>
);

export default Navbar;
