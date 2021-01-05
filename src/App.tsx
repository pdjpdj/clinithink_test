import React from 'react';
import './App.css';
import Part1 from './components/Part1'
import data from './data/data.json';

export interface DataItem {
  title: string;
  category: string;
  id: number;
}
export interface Data {
  items: DataItem[];
  favourite_categories: string[];
}

function App() {
  return (
    <div className="App">
      <Part1 data={data} />
    </div>
  );
}

export default App;
