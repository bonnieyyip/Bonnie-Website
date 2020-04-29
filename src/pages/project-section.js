import React from "react"
import {Container, Row, Col} from 'react-bootstrap'

const ProjectSection = ({title, description}) => (
  <Container>
    <h1>{title}</h1>
    <p>{description}</p>
  </Container>

)

export default ProjectSection
