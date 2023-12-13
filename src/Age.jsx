// Age.js
import PropTypes from 'prop-types';

export function Age({ age }) {
  return <p>Your age is {age}</p>;
}

Age.propTypes = {
  age: PropTypes.number.isRequired, // Add prop type validation for 'age'
};