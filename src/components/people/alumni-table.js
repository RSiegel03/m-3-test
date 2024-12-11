import React from 'react';

const AlumniTable = ({ alumni }) => (
  <div>
    <h2>Our Alumni</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Graduation Year</th>
          <th>Publications</th>
          <th>Current Position</th>
        </tr>
      </thead>
      <tbody>
        {alumni.map((alumnus, index) => {
          const { frontmatter } = alumnus;  // Destructure to avoid errors
          
          // Add a check to make sure frontmatter is defined
          if (!frontmatter) {
            console.error(`Alumnus at index ${index} is missing frontmatter`);
            return null;  // Skip rendering this row if frontmatter is undefined
          }

          const { name, graduationYear, publications, currentPosition } = frontmatter;

          return (
            <tr key={name}>
              <td>{name}</td>
              <td>{graduationYear || 'N/A'}</td>
              <td>{publications || 'N/A'}</td>
              <td>{currentPosition || 'N/A'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default AlumniTable;
