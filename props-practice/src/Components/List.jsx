import React from 'react';
import PropTypes from 'prop-types';
import "../Components/List.css";

export const List = (props) => {
  return (
    <div className='Details'>
      <table>
        <tbody>
          <tr>
            <th>Name</th><td>{props.name||"No name"}</td>
          </tr>
          <tr>
            <th>Year</th><td>{props.year||"No year"}</td>
          </tr>
          <tr>
            <th>Dept</th><td>{props.dept}</td>
          </tr>
          <tr>
            <th>Roll No</th><td>{props.roll}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

List.propTypes = { 
  name: PropTypes.string,
  year: PropTypes.number,  
  dept: PropTypes.string,
  roll: PropTypes.number,  
};


List.defaultProps = {
  name: "Manibala",
  year: 3,
};
 

export default List;
