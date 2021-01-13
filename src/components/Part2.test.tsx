import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Part2 from './Part2';

import mockData from '../data/mockData.json';

test('renders Part2 with data has 9 list items', () => {
  render(<Part2 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(9);
});

test('renders Part2 with data has 3 categories at top', () => {
  render(<Part2 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items[0]).toHaveTextContent(/^cat1$/);
  expect(items[1]).toHaveTextContent(/^cat2$/);
  expect(items[2]).toHaveTextContent(/^cat3$/);
});

test('renders Part2 with data has 6 items at bottom', () => {
  render(<Part2 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items[3]).toHaveTextContent(/^item1$/);
  expect(items[4]).toHaveTextContent(/^item2$/);
  expect(items[5]).toHaveTextContent(/^item3$/);
  expect(items[6]).toHaveTextContent(/^item4$/);
  expect(items[7]).toHaveTextContent(/^item5$/);
  expect(items[8]).toHaveTextContent(/^item6$/);
});

test('clicking on top category hides 4 items', () => {
  render(<Part2 data={mockData} />);
  let items = screen.getAllByRole('listitem');
  fireEvent.click(items[0]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(5);
  expect(items[0]).toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item1$/);
  expect(items[4]).toHaveTextContent(/^item2$/);
});

test('clicking on middle category hides 5 items', () => {
  render(<Part2 data={mockData} />);
  let items = screen.getAllByRole('listitem');
  fireEvent.click(items[1]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(4);
  expect(items[1]).toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item3$/);
});

test('clicking on middle category twice shows all items', () => {
  render(<Part2 data={mockData} />);
  let items = screen.getAllByRole('listitem');
  fireEvent.click(items[1]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(4);
  expect(items[1]).toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item3$/);

  fireEvent.click(items[1]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(9);
  expect(items[1]).not.toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item1$/);
});