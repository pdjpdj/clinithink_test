import React, { useState } from 'react';
import { Data, DataItem } from '../App';
import '../App.css';

interface Part2Props {
  data: Data,
}

const Part2: React.FC<Part2Props> = (props: Part2Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {data} = props;

  const toggleCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  }

  const categorySet = new Set(data.items.map((item: DataItem) => item.category));

  return (
    <ul>
      {
        Array.from(categorySet).map(category => (
          <li 
            onClick={() => toggleCategory(category)} 
            className={selectedCategory === category ? 'selected-category' : ''} 
            key={category}>
              {category}
          </li>
        ))
      }
      <ul className='category-items'>
        {
          data.items
            .filter((item: DataItem) => selectedCategory === '' ? true : item.category === selectedCategory)
            .sort((a: DataItem, b: DataItem) =>
              a.title > b.title ? 1 : -1
            )
            .map((item: DataItem) => (
              <li key={item.id}>{item.title}</li>
            ))
        }
      </ul>
    </ul>
  );
};

export default Part2;
