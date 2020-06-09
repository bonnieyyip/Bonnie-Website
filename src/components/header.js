import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';
import "./my-styles.css"
import AllProjects from "../pages/all-projects"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: `50px`,
      width: `100%`,
      position: `absolute`,
      zIndex: `1`,
    }}
  >
    <Container>
      <Row>
        <Col md={3}> </Col>
        <Col md={6}>
          <div className="nav-bar">
            <h1 className="neon-banner">Bonnie Yip</h1>
            <h5 className="section"><Link to="/" className="section-link">About</Link></h5>
            <h5 className="section"><Link to="/all-projects" className="section-link">Projects</Link></h5>
            <h5 className="section"><Link to="/" className="section-link">Resume</Link></h5>
          </div>
        </Col>
        <Col md={3}> </Col>
      </Row>
    </Container>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
