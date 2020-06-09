import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SecondPage from "./page-2"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import "../components/my-styles.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="opening-image">
      <div className="in-background">
        <Container>
          <Row>
            <Col md={6}><img src={require('../images/bonnie-profile-icon.jpg')} id="profile-icon"/></Col>
            <Col md={1}></Col>
            <Col md={5} className="about-me-paragraph">
              <h1>Welcome! I'm Bonnie.</h1>
              <p>Welcome to my personal website. I am a front-end developer based in Seattle, WA. Here you will find some snippets about what I've been working on for the past 2 years. </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  </Layout>

)

export default IndexPage
