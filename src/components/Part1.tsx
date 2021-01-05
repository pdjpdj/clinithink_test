import React, { useState } from 'react';
import { Data, DataItem } from '../App';

interface Part1Props {
  data: Data,
}

const Part1: React.FC<Part1Props> = (props: Part1Props) => {
  const [expand, setExpand] = useState(false);
  const {data} = props;

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
        {
          data.items
            .sort((a: DataItem, b: DataItem) =>
                a.title > b.title ? 1 : -1
            )
            .map(item => (
              <div>{`● ${item.title}`}</div>
            ))
        }
      </div>
        
      : null
    }
      
    </div>
  );
};

export default Part1;
