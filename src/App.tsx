import { Button } from '../src/components/Button/Button';
import { TextInput } from '../src/components/Input/TextInput';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 space-y-4">
      <h1>Welcome to the Component System</h1>
      <TextInput label="Email" placeholder="Enter your email" helperText="We’ll never share your info." />
      <Button variant="primary">Click Me</Button>
    </div>
  );
}

export default App;
