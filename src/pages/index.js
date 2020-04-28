import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ProfileImage from "../components/image"
import SEO from "../components/seo"
import SecondPage from "./page-2"
import ProjectSection from "./project-section"
import ProjectSubSection from "./project-subsection"
import "../components/my-styles.css"
import {Container, Row, Col} from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="opening-image">
      <div className="introduction">
        <Container fluid>
          <Row>
            <Col xs='6'>Welcome to my personal website. I am a front-end developer based in Seattle, WA. Here you will find some snippets about what I've been working on for the past 2 years.</Col>
            <Col xs='6'>Column</Col>
          </Row>
        </Container>
      </div>
    </div>

    <div className="next-section">
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <ProfileImage />
      </div>
      <div class='row'>
        <div class="col-sm-3">
          <Link to="/page-2/">Go to page 2</Link>
        </div>
        <div class="col-sm-3">
          <Link to="/page-2/">Go to page 2</Link>
        </div>
      </div>
      <div class='row'>
          <ProjectSection title='Educating Young Eyes' description='This was a senior project during my undergrad.'></ProjectSection>
          <ProjectSection title='Microsoft Partner Portal' description='Internal Project'></ProjectSection>
      </div>
    </div>
  </Layout>

)

export default IndexPage
