import React from 'react';
import { render, screen } from '@testing-library/react';
import Part1 from './Part1';

import mockData from '../data/mockData.json';

test('renders Part1 with data has 6 list items', () => {
  render(<Part1 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(6);
});

test('renders Part1 with data has 6 items', () => {
  render(<Part1 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items[0]).toHaveTextContent(/^item1$/);
  expect(items[1]).toHaveTextContent(/^item2$/);
  expect(items[2]).toHaveTextContent(/^item3$/);
  expect(items[3]).toHaveTextContent(/^item4$/);
  expect(items[4]).toHaveTextContent(/^item5$/);
  expect(items[5]).toHaveTextContent(/^item6$/);
});
