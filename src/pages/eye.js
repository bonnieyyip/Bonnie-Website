import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { Container, Row, Col } from 'react-bootstrap';

const ProjectEYE = ({title, description}) => (
  <Layout>
    <Container>
        <h1>{title}</h1>
        <p>{description}</p>
    </Container>
  </Layout>
)

export default ProjectEYE
