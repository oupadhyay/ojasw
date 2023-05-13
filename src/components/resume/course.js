import React from "react";
import { Box, Text, Heading } from "theme-ui";
import { Row, Column } from "@carbonplan/components";

const CourseList = [
  "Honors Discrete Mathematics",
  "Linear Algebra",
  "Data Structures and Algorithms",
  "Introduction to Artificial Intelligence",
  "Finance and Investments",
  "Statistics and Applications",
  "Differential Equations",
  "Computer Systems and Networks",
  "Design and Analysis of Algorithms",
  "Numerical Analysis",
  "Financial Modeling",
  "Computer Vision",
  "Automata and Complexity Theory",
];

const CourseWork = () => (
  <Box id="coursework" mt={[3, 2, 6, 6]} mb={[3, 3, 6, 6]}>
    <Row mb={[1, 2]}>
      <Column start={[1, 1, 2, 2]} width={[3]}>
        <Heading
          sx={{
            fontSize: [4, 5],
            color: "pink",
          }}
        >
          Course Work
        </Heading>
      </Column>
    </Row>

    <Row>
      <Column start={[1, 1, 2, 2]} width={[6, 7, 8, 8]}>
        <Text
          sx={{
            color: "secondary",
            fontSize: [2, 3, 3, 4],
            fontFamily: "faux",
            letterSpacing: "faux",
            textTransform: "uppercase",
          }}
        >
          {CourseList.join(" ● ")}
        </Text>
      </Column>
    </Row>
  </Box>
);

export default CourseWork;
