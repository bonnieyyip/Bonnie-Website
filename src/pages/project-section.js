import React from "react"
import {Container, Row, Col} from 'react-bootstrap'

const ProjectSection = ({title, description}) => (
  <Container>
    <Row>
      <Col>{title}</Col>
      <Col>{description}</Col>
    </Row>
  </Container>

)

export default ProjectSection
