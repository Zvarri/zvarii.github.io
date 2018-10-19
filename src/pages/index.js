import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ( {data} ) => (
  <div>
    <Layout>
      <h1>Hola mundo</h1>
      <p>Welcome to your new Gatsby site :D.</p>
      <p>Now go build something great (I dont wanna >:().</p>
      <Link to="/page-2/">Go to page 2 (or dont)</Link>
      <Link to="/404/">Go to page 404 (or dont)</Link>
    </Layout>
    <div>
      {data.allMarkdownRemark.edges.map(( { node }) => (
        <div>
          <h1 >
            { node.frontmatter.title }
          </h1>
          <p>
            { node.excerpt }
          </p>
        </div>
      ))}
    </div>
  </div>
)

export default IndexPage
export const query = graphql`
query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          date
          author
        }
        excerpt(pruneLength: 80)
        timeToRead
      }
    }
  }
}`

/* fields {
  slug
  }

  href={ node.fields.slug }
  */