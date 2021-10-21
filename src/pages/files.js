import * as React from "react"

import { Box, Themed } from 'theme-ui'
import PoopSad from './emoji/poop-sad'
import Layout from "../components/layout";
import { Column, Row } from '@carbonplan/components'

const ResumePage = () => {
  return (
    <Layout footer={false} mode="mouse" title={'404 / ojasw'}>
      <Row sx={{ mb: [5, 0, 0], pt: [0, 0, 6] }}>
        <Themed.h1>Files!</Themed.h1>
        <Box
        sx = {
          {
            fontSize: [4, 4, 4, 5],
            lineHeight: 'h3',
            mt: [3, 4, 4],
            mb: [2, 3, 3],
            maxWidth: ['90%', '90%', '400px'],
          }
        }>
          <Link to = {"../../content/assets/pipact-report.pdf"}>
            <ArrowButton sx = {{color: "red"}}
              size = "md"
              label= "piPACT Paper"
            />
            </Link> 
        </Box>
      </Row>
    </Layout>
  )
}

export default ResumePage
