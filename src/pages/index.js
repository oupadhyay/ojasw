import * as React from "react";

// load fonts and css
import "@carbonplan/components/globals.css";

// components
import Layout from "../components/layout";
import Intro from "../components/resume/intro";
import CourseWork from "../components/resume/course";
import Experience from "../components/resume/experience";
import Projects from "../components/resume/projects";

import { Box } from "@theme-ui/components";
import { Analytics } from "@vercel/analytics/react";

// markup
const AboutPage = () => {
  return (
    <Layout mode="mouse">
      <Box mt={[1, 2]} mb={[1, 2, 2, 2]}>
        <Intro />
        <Experience />
        <CourseWork />
        <Projects />
      </Box>
      <Analytics />
    </Layout>
  );
};

export default AboutPage;
