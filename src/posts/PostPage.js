import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

class PostPage extends Component {
  render() {
    const { data, location } = this.props;
    return (
      <Layout location={location}>
        <span>{data.markdownRemark.frontmatter.date}</span>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.excerpt}</p>
        <div dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }} />
      </Layout>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString:"MMMM DD YYYY")
      }
    }
  }
`