import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./my-styles.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      height: `100%`,
      width: `220px`,
      position: `fixed`,
      zIndex: `1`,
      top: `0`,
      right: `0`,
      overflowX: `hidden`,
      paddingTop: `20px`,
    }}
  >
    <div className="side-bar">
      <img src={require('../images/bonnie-profile-icon.jpg')} id="profile-icon"/>

      <h5 className="section"><Link to="/" className="section-link">About Me</Link></h5>
      <h5 className="section"><Link to="/my-projects.js" className="section-link">My Projects</Link></h5>
      <h5 className="section"><Link to="/my-resume.js" className="section-link">My Resume</Link></h5>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
