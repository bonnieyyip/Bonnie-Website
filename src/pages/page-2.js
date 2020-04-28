import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({title, description}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>{title}</h1>
    <p>{description}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
