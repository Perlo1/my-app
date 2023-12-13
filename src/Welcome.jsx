// Welcome.js
import { Age } from './Age';
import PropTypes from 'prop-types';

export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Hello, <strong>{name}</strong>!</h2>
      <Age age={age} />
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};