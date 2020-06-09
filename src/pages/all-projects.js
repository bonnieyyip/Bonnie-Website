import React from "react"
import { Link } from "gatsby"
import ProfileImage from "../components/image"
import ProjectSection from "./project-section"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import "../components/my-styles.css"

const AllProjects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="opening-image">
        <div className="in-background">
        <Container>
            <Row>
            <Col>
                <ProfileImage />
                <ProjectSection title='Microsoft Dynamics 365 Projects' description='Enhancing Microsoft Dynamics 365 out-of-the-box features by gathering requirements of customer needs and developing various solutions written in C# and JavaScript '></ProjectSection>
            </Col>

            <Col>
                <ProfileImage />
                <ProjectSection title='Google Maps API' description='Used Dynamics 365 as a database to grab address info which is then displayed with features such as zooming into a specific city/state or a zip and checking/unchecking pins.'></ProjectSection>
            </Col>

            <Col>
                <ProfileImage />
                <ProjectSection title='Power Apps Portals' description='Utilizing Microsoft Power Apps Portals to create 5+ custom websites with styling using CSS and jQuery, as well as developing additional functionality using C# and JavaScript.'></ProjectSection>
            </Col>
            </Row>

            <Row>
            <Col>
                <ProfileImage />
                <ProjectSection title='ASP.NET MVC Web App' description='Used by 30+ external customers for viewing and modifying Microsoft Partner Portal subscriptions. Utilized'></ProjectSection>
            </Col>

            <Col>
                <ProfileImage />
                <ProjectSection title='Educating Young Eyes (EYE)' description='Worked in a team of 5 to develop assessment tools for detecting near vision problems in children that affect reading and learning. Developed three websites using HTML, CSS, JS, Bootstrap and stored data from these sites using MySQL. These websites will be used for children in school districts all across Washington. Presented to over 80+ attendees'></ProjectSection>
            </Col>

            <Col>
                <ProfileImage />
                <ProjectSection title='ASP.NET WEB API (CC API)' description='Sends data to CC API via Dynamics. Then CC will post data to endpoint and data is populated back to Dynamics. Utilized C# APIController to create a secured HTTP endpoint where an external API can post data. It was secured using Oath 2.0 and to access the endpoint, we would need to generate an access token and use that to pass into the header of the endpoint'></ProjectSection>
            </Col>
            </Row>
        </Container>
        </div>
    </div>
  </Layout>
)

export default AllProjects
