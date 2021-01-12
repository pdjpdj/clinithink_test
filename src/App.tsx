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
      <h1 onClick={() => setPart(1)}>Item List {part !== 1 ? '(click to view)' : ''}</h1>
      { part === 1 ? <Part1 data={data} /> : null}
      <h1 onClick={() => setPart(2)}>Category List {part !== 2 ? '(click to view)' : ''}</h1>
      { part === 2 ? <Part2 data={data} /> : null}
      <h1 onClick={() => setPart(3)}>Favourite List {part !== 3 ? '(click to view)' : ''}</h1>
      { part === 3 ? <Part3 data={data} /> : null}
    </div>
  );
}

export default App;
