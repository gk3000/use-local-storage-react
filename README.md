# @gk3000/use-local-storage

A simple and reusable React hook for managing localStorage with stateful reactivity. This hook allows you to easily store, retrieve, and clear values from localStorage while keeping them synchronized with your component's state.

## Features

- Persistent Storage: Syncs your component state with localStorage to persist data across page reloads.
- State Management: Automatically triggers component re-renders when the localStorage value changes.
- Dynamic Data: Handles various data types (strings, numbers, objects, arrays, etc.) with JSON serialization.
- Clear Functionality: Easily clear the localStorage entry and reset the state to the initial value.

## Installation

You can install the hook via npm:

```
npm i @gk3000/use-local-storage
```
or
```
yarn add @gk3000/use-local-storage
```

## Usage 

### Import:

```
import useLocalStorage from '@gk3000/use-local-storage'
```

### Basic example:
```
import React from 'react';
import useLocalStorage from '@your-username/use-local-storage';

function App() {
  // Use the custom hook to manage localStorage and component state
  const [name, setName, clearName] = useLocalStorage('name', 'Guest');

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={clearName}>Clear Name</button>
    </div>
  );
}

export default App;
```
### Parameters
```
const [storedValue, setValue, clear] = useLocalStorage(key, initialValue);
```

- `key` (`string`): The key in `localStorage` under which the data is stored.
- `initialValue` (`any`): The initial value to use if no existing data is found in `localStorage` for the given key.

### Returns
- `storedValue`: The current value stored in `localStorage` (and React state).
- `setValue`: A function to update the value in `localStorage` and React state.
- `clear`: A function to remove the value from `localStorage` and reset the state to the `initialValue`.

### Advanced Example (Objects and Arrays)

The `useLocalStorage` hook can handle more complex data structures like arrays and objects:

```
function App() {
  const [favoriteColors, setFavoriteColors, clearColors] = useLocalStorage('colors', ['Red', 'Blue']);

  const addColor = () => setFavoriteColors(prevColors => [...prevColors, 'Green']);

  return (
    <div>
      <h2>Favorite Colors:</h2>
      <ul>
        {favoriteColors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
      <button onClick={addColor}>Add Green</button>
      <button onClick={clearColors}>Clear Colors</button>
    </div>
  );
}
```

## Error Handling

The hook safely handles any errors that may occur when interacting with `localStorage` (e.g., JSON parsing errors, browser restrictions) and falls back to the initial value if necessary.

## License

MIT

