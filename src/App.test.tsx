import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders initial links', () => {
  render(<App />);
  const headings = screen.getAllByRole('heading');
  expect(headings[0]).toHaveTextContent('Item List (click to view)');
  expect(headings[1]).toHaveTextContent('Category List (click to view)');
  expect(headings[2]).toHaveTextContent('Favourite List (click to view)');
});

test('Click on top link', () => {
  render(<App />);
  
  const headings = screen.getAllByRole('heading');
  fireEvent.click(headings[0]);

  expect(headings[0]).toHaveTextContent('Item List');
  expect(headings[1]).toHaveTextContent('Category List (click to view)');
  expect(headings[2]).toHaveTextContent('Favourite List (click to view)');
});

test('Click on middle link', () => {
  render(<App />);
  
  const headings = screen.getAllByRole('heading');
  fireEvent.click(headings[1]);

  expect(headings[0]).toHaveTextContent('Item List (click to view)');
  expect(headings[1]).toHaveTextContent('Category List');
  expect(headings[2]).toHaveTextContent('Favourite List (click to view)');
});

test('Click on bottom link', () => {
  render(<App />);
  
  const headings = screen.getAllByRole('heading');
  fireEvent.click(headings[2]);

  expect(headings[0]).toHaveTextContent('Item List (click to view)');
  expect(headings[1]).toHaveTextContent('Category List (click to view)');
  expect(headings[2]).toHaveTextContent('Favourite List');
});