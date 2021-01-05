import React from 'react';
import { Data, DataItem } from '../App';

interface Part1Props {
  data: Data,
}

const Part1: React.FC<Part1Props> = (props: Part1Props) => {
  const {data} = props;

  return (
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
  );
};

export default Part1;
