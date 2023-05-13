import React from "react";

import { Box, Heading } from "@theme-ui/components";
import { Row, Column, Callout } from "@carbonplan/components";

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
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <a href="https://bit.ly/oj-resume" target="_blank">
          <Callout color="primary" label="Resume">
            Coming Soon... Check out:
          </Callout>
        </a>
      </Column>
    </Row>
  </Box>
);

export default Projects;
