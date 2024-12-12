import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './alumni-table.css';
import './people.css';

const AlumniTable = ({ alumni }) => {
  // Function to parse URLs and return an array of <a> elements
  const renderCurrentPositionLinks = (currentPosition) => {
    if (!currentPosition || currentPosition.length === 0) {
      return <span>No current position available</span>;
    }
  
    return currentPosition.map((position, index) => {
      const { description, linkText, linkUrl } = position;
  
      return (
        <React.Fragment key={index}>
          {description && <span>{description} </span>}
          {linkUrl && (
            <a href={linkUrl} target="_blank" rel="noopener noreferrer">
              {linkText || linkUrl} {/* Display linkText or fallback to the URL */}
            </a>
          )}
          {index < currentPosition.length - 1 && <span>, </span>} {/* Add a comma between entries */}
        </React.Fragment>
      );
    });
  };
  
  return (
    <div className="alumni-header">
      <section>
        <header>
         <h1>
          Alumni Directory
        </h1>
        <p>A comprehensive list of our distinguished graduates</p>
        </header>
      </section>

      <table className="alumni-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Graduation Year</th>
            <th>Publications</th>
            <th>Current Position</th>
          </tr>
        </thead>
        <tbody>
          {alumni.length > 0 ? (
            alumni.map((alumnus, index) => {
              const { name, graduationYear, publications, currentPosition } = alumnus;

              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{graduationYear || 'N/A'}</td>
                  <td>{publications || 'N/A'} </td>
                  <td>{renderCurrentPositionLinks(currentPosition)}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No alumni data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AlumniTable;
