import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo/seo';
import PeopleContainer from '../../components/people/people-container';
import AlumniTable from '../../components/people/alumni-table';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Our Team" />
    <PeopleContainer data={data} />
  </Layout>
);

export const query = graphql`
  query {
    currentPeople: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/people/current/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            email
            image {
              childImageSharp {
                gatsbyImageData(
                  quality: 70,
                  placeholder: BLURRED,
                  height: 300,
                  width: 300,
                )
              }
            }
            name
            title
            order
          }
        }
      }
    }

    alumni: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/people/alumni/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            graduationYear
            publications
            currentPosition {
              description
              linkText
              linkUrl
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
