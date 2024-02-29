import React from "react";

import { Box, Text, Heading } from "theme-ui";
import { Row, Column } from "@carbonplan/components";
import { Link } from "gatsby";
import { Arrow } from "@carbonplan/icons";
import ArrowButton from "../arrowbutton";

const Intro = () => (
  <Box mb={[5, 8]}>
    <Box
      sx={{
        position: "absolute",
        left: "0px",
        // bg: "muted",
        width: "100%",
        height: ["0vh", "10vh", "10vh", "10vh"],
      }}
    />
    <Box
      sx={{
        height: ["0vh", "10vh", "10vh", "10vh"],
      }}
    />
    <Row sx={{ mt: [2, 2] }}>
      <Column start={[1, 1, 2, 2]} width={[4, 2, 3, 2]}>
        <Heading
          sx={{
            letterSpacing: "heading",
            fontSize: [6, 8, 8, 9],
            color: "purple",
          }}
        >
          Hello!
        </Heading>
      </Column>

      <Column start={[1, 1, 2, 2]} width={[5, 4, 5, 5]}>
        <Box
          sx={{
            pt: [2, 2],
            fontSize: [3, 3, 4, 5],
          }}
        >
          <Text>
            I'm a third-year student at Georgia Institute of Technology. I am
            majoring in Computer Science with a specialization in Machine Learning
            and minoring in Finance. Feel free to contact me!
          </Text>

          <Box mt={[4]}>
            <Link to={"/blog"}>
              <ArrowButton sx={{ color: "grey" }} size="md">
                {" "}
                Blog{" "}
              </ArrowButton>
            </Link>
          </Box>
        </Box>
      </Column>

      <Column start={[6, 7, 9, 9]} width={[1]} sx={{ position: "relative" }}>
        <Arrow
          sx={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            transform: "rotate(135deg)",
            fill: "red",
          }}
        />
      </Column>
    </Row>
  </Box>
);

export default Intro;
