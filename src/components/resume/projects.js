import React from "react";

import "@carbonplan/components/globals.css"
import "@carbonplan/components/fonts.css"
import "katex/dist/katex.min.css"

import { Box, Heading, Text } from "@theme-ui/components";
import { Row, Column, Buttons } from "@carbonplan/components";

const { CalloutButton } = Buttons;

const Projects = () => (
  <Box id="projects" mt={[3, 2, 6, 6]} mb={[3, 2, 6, 6]}>
    <Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <Heading
          sx={{
            fontSize: [4, 5],
            color: "teal",
          }}
        >
          Projects
        </Heading>
      </Column>
    </Row>
    <Row>
      <Column start={[1, 1, 2, 2]} width={[4]}>
        <Text color="text" variant="caps" sx={{ fontSize: 3 }}>
          COMING SOON...
          In the meanwhile, please check out my
        </Text>
        <a href="https://drive.google.com/file/d/1W4T7fqpxg45Z4tP1IwLmE2UPHbDNQvvS/view" target="_blank">
          <CalloutButton color="primary" label="Resume" />
        </a>
      </Column>
    </Row>
  </Box>
);

export default Projects;
