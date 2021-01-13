import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Part3 from './Part3';

import mockData from '../data/mockData.json';

test('renders Part3 with data has 9 list items', () => {
  render(<Part3 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(9);
});

test('renders Part3 with data has 3 categories sorted at top', () => {
  render(<Part3 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items[0]).toHaveTextContent(/^cat3$/);
  expect(items[1]).toHaveTextContent(/^cat2$/);
  expect(items[2]).toHaveTextContent(/^cat1$/);
});

test('renders Part3 with data has 6 items at bottom', () => {
  render(<Part3 data={mockData} />);
  const items = screen.getAllByRole('listitem');
  expect(items[3]).toHaveTextContent(/^item1$/);
  expect(items[4]).toHaveTextContent(/^item2$/);
  expect(items[5]).toHaveTextContent(/^item3$/);
  expect(items[6]).toHaveTextContent(/^item4$/);
  expect(items[7]).toHaveTextContent(/^item5$/);
  expect(items[8]).toHaveTextContent(/^item6$/);
});

test('clicking on bottom category hides 4 items', () => {
  render(<Part3 data={mockData} />);
  let items = screen.getAllByRole('listitem');
  fireEvent.click(items[2]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(5);
  expect(items[2]).toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item1$/);
  expect(items[4]).toHaveTextContent(/^item2$/);
});

test('clicking on middle category hides 5 items', () => {
  render(<Part3 data={mockData} />);
  let items = screen.getAllByRole('listitem');
  fireEvent.click(items[1]);

  items = screen.getAllByRole('listitem');
  expect(items.length).toEqual(4);
  expect(items[1]).toHaveClass('selected-category');
  expect(items[3]).toHaveTextContent(/^item3$/);
});

test('clicking on middle category twice shows all items', () => {
  render(<Part3 data={mockData} />);
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