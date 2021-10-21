import * as React from "react";

import { Link } from "gatsby";
import { Box, Themed } from "theme-ui";
import Layout from "../components/layout";
import { Row, Buttons } from "@carbonplan/components";

const { ArrowButton } = Buttons;

const ResumePage = () => {
  return (
    <Layout footer={false} mode="mouse" title={"404 / ojasw"}>
      <Row sx={{ mb: [5, 0, 0], pt: [0, 0, 6] }}>
        <Themed.h1>Files!</Themed.h1>
      </Row>
      <Row sx={{ mb: [2], pt: [0] }}>
        <Box
          sx={{
            fontSize: [7],
            lineHeight: "h3",
            maxWidth: ["90%", "90%", "200px"],
          }}
        >
          <Link to={"../../static/files/asdfjk/pipact-report.pdf"}>
            <ArrowButton sx={{ color: "red" }} size="sm" label="piPACT Paper" />
          </Link>
          <br />
          <Link to={"../../static/files/asdfjk/hs-transcript.pdf"}>
            <ArrowButton
              sx={{ color: "red" }}
              size="sm"
              label="High School Transcript"
            />
          </Link>
          <br />
        </Box>
      </Row>
    </Layout>
  );
};

export default ResumePage;
