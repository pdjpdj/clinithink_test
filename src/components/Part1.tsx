import React, { useState } from 'react';
import { Data, DataItem } from '../App';

interface Part1Props {
  data: Data,
}

const Part1: React.FC<Part1Props> = (props: Part1Props) => {
  const [sorted, setSorted] = useState(false);
  const [expand, setExpand] = useState(false);
  const {data} = props;

  const toggleSorted = () => {
    setSorted(!sorted);
  }

  const toggleExpand = () => {
    setExpand(!expand);
  }
  return (
    <div>
      <div onClick={toggleExpand}>
        <h1>Item List (click to {expand ? 'hide' : 'view'})</h1>
      </div>
      {expand
      ?
      <div>
        <button onClick={toggleSorted}>{sorted ? 'Original Order' : 'Sort Titles Alphabetically'}</button>
        {
          data.items
            .sort((a: DataItem, b: DataItem) => {
              if (sorted) {
                return a.title > b.title ? 1 : -1;
              }
              return a.id - b.id;
            })
            .map(item => (
              <div> {item.title} </div>
            ))
        }
      </div>
        
      : null
    }
      
    </div>
  );
};

export default Part1;
