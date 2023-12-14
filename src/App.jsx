
import { HelloWorld } from './HelloWorld';
import { Welcome } from './Welcome';
import { AlertClock } from './alertclock';
import { Message } from './message';

export function App() {
  return (
    <div>
      <h1>My Awesome Application</h1>
      <hr />
      <HelloWorld />
      <Welcome name="John" age={24} />
      <Message />
      <AlertClock />
    </div>
  );
}