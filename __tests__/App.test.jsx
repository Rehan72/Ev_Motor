import {render} from '@testing-library/react';
import React from 'react';
import App from '../src/App'; // Adjust the path as necessary

test('renders App component without crashing', () => {
  render(<App />);
});
