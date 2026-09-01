import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
const { getByText } = render();
const linkElement = getByText((content, element) => content.startsWith('aabbcc'));
});
