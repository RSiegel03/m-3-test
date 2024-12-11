import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import People from './people';
import AlumniTable from './alumni-table'; // Import the AlumniTable component
import sortMarkdown from '../../utils/sort-markdown';

const PeopleContainer = () => {
  const query = useStaticQuery(
    graphql`
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
                currentPosition
              }
            }
          }
        }
      }
    `
  );

  // Log the data fetched from GraphQL to ensure it's being retrieved
  console.log('Current People:', query.currentPeople.edges);
  console.log('Alumni:', query.alumni.edges);

  // Sorting current people
  const currentPeople = sortMarkdown(query.currentPeople.edges, ['order', 'name']);
  
  // Extracting alumni data
  const alumni = query.alumni.edges.map(({ node }) => node.frontmatter);

  return (
    <>
      {currentPeople.length > 0 && <People markdown={currentPeople} />}
      
      {/* Render the alumni table if there is any alumni data */}
      {alumni.length > 0 && <AlumniTable alumni={alumni} />}
    </>
  );
};

export default PeopleContainer;
