
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome';
import { Message } from './message';

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="John" age={24} />
      <Message />
    </div>
  );
}