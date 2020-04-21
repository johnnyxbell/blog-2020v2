import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <h2>This is the title of the blog</h2>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.path;
        return (
          <article key={node.frontmatter.path}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
        }
      }
    }
  }
`;
