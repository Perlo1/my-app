// Welcome.js
import { Age } from './Age';
import PropTypes from 'prop-types';

export function Welcome({ name, age }) {
  return (
    <div>
      <h2>Hello, <strong>{name}</strong>!</h2>

      {age > 18 && <Age age={age} />}

      {age && <Age age={age} />}

      {age > 18 && age < 65 && <Age age={age} />}

      {age > 18 && age < 65 && name === 'John' && <Age age={age} />}
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};