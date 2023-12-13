// Welcome.js
import { Age } from './Age';
import PropTypes from 'prop-types';

export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Hello, <strong>{name}</strong>!</h2>

      {/* Render Age component only if age is greater than 18 */}
      {age > 18 && <Age age={age} />}

      {/* Render Age component only if age is present */}
      {age && <Age age={age} />}

      {/* Render Age component only if age is between 18 and 65 (inclusive) */}
      {age > 18 && age < 65 && <Age age={age} />}

      {/* Render Age component only if age is between 18 and 65, and name is "John" */}
      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};