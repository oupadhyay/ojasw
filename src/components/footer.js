import React from "react";

import { Box, Container, Themed } from "theme-ui";
import { Buttons, Column, Row } from "@carbonplan/components";

const Label = ({ children }) => (
  <Box
    sx={{
      fontSize: [2, 2, 2, 3],
      fontFamily: "heading",
      letterSpacing: "mono",
      mb: [2],
    }}
  >
    {children}
  </Box>
);

const CarbonPlan = () => (
  <a href={"https://www.carbonplan.org"}>
    <Buttons.ArrowButton
      label="(carbon)plan"
      fill="green"
      color="green"
      size="xs"
      sx={{ display: "inline-block" }}
    />
  </a>
);

const Footer = () => (
  <Container mt={[7, 7, 7, 8]} mb={[7, 7, 8, 8]} pb={[2, 1, 0, 0]}>
    <Box
      sx={{
        mt: [7, 7, 7, 8],
        mb: [7, 7, 7, 8],
        pb: [2, 1, 0, 0],
      }}
    >
      <Row sx={{ mb: [0, 0, 4, 5] }}>
        <Column start={[1, 1, 2, 2]} width={[3, 3]}>
          <Box>
            <Label> EMAIL </Label>
            <Themed.a href="mailto:ojaswupadhyay@gmail.com" as="a">ojaswupadhyay@gmail.com</Themed.a>
          </Box>
        </Column>
        <Column start={[1, 4, 5, 5]} width={[3, 3]} sx={{ mt: [3, 0, 0, 0] }}>
          <Box>
            <Label>GITHUB</Label>
            <Themed.a href="https://github.com/oupadhyay" target="_blank">github.com/oupadhyay</Themed.a>
          </Box>
        </Column>
        <Column start={[1, 7, 8, 8]} width={[2, 3]} sx={{ mt: [3, 0, 0, 0] }}>
          <Box>
            <Label>LINKEDIN</Label>
            <Themed.a href="https://linkedin.com/in/ojasw/" target="_blank">linkedin.com/in/ojasw/</Themed.a>
          </Box>
        </Column>
      </Row>
    </Box>
    <Row sx={{ mb: ["2px"], mt: [5, 5, 4] }}>
      <Column
        start={[1, 1, 2, 2]}
        width={[3, 2, 3, 3]}
        sx={{
          display: "flex",
          alignItems: ["flex-start", "flex-start", "flex-end"],
        }}
      >
        <Box
          sx={{
            bottom: "0px",
            borderStyle: "solid",
            borderColor: "muted",
            borderWidth: "0px",
            borderTopWidth: "1px",
            pt: [2],
          }}
        >
          <Box
            sx={{
              color: "secondary",
              fontSize: [1, 1, 1, 2],
              fontFamily: "mono",
              letterSpacing: "mono",
            }}
          >
            (c) OJASW UPADHYAY
          </Box>
        </Box>
      </Column>

      <Column
        start={[1, 4, 5, 5]}
        width={[5, 5]}
        sx={{
          display: "flex",
          alignItems: ["flex-start", "flex-start", "flex-end"],
        }}
      >
        <Box
          sx={{
            bottom: "0px",
            borderStyle: "solid",
            borderColor: "muted",
            borderWidth: "0px",
            borderTopWidth: "0px",
            pt: [2],
            mt: [2, 2, 0, 0],
          }}
        >
          <Box
            sx={{
              fontSize: [2, 2, 2, 3],
              fontFamily: "body",
              color: "secondary",
            }}
          >
            Website built on top of the work of <CarbonPlan />
          </Box>
        </Box>
      </Column>
    </Row>
  </Container>
);

export default Footer;
