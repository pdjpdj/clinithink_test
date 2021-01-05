import React, { useState } from 'react';
import './App.css';
import Part1 from './components/Part1'
import Part2 from './components/Part2';
import Part3 from './components/Part3';
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
  const [part, setPart] = useState(0);
  return (
    <div className="App">
      <div onClick={() => setPart(1)}>
        <h1>Item List {part !== 1 ? '(click to view)' : ''}</h1>
      </div>
      { part === 1 ? <Part1 data={data} /> : null}
      <div onClick={() => setPart(2)}>
        <h1>Category List {part !== 2 ? '(click to view)' : ''}</h1>
      </div>
      { part === 2 ? <Part2 data={data} /> : null}
      <div onClick={() => setPart(3)}>
        <h1>Favourite List {part !== 3 ? '(click to view)' : ''}</h1>
      </div>
      { part === 3 ? <Part3 data={data} /> : null}
    </div>
  );
}

export default App;
