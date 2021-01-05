import React, { useState } from 'react';
import { Data, DataItem } from '../App';
import '../App.css';

interface Part2Props {
  data: Data,
}

const Part2: React.FC<Part2Props> = (props: Part2Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expand, setExpand] = useState(false);
  const {data} = props;

  const toggleExpand = () => {
    setExpand(!expand);
  }

  const toggleCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(category);
    }
  }

  const categorySet = new Set(data.items.map((item: DataItem) => item.category));

  return (
    <div>
      <div onClick={toggleExpand}>
        <h1>Category List (click to {expand ? 'hide' : 'view'})</h1>
      </div>
      {expand
      ?
      <div>
        {
          Array.from(categorySet).map(category => (
            <div onClick={() => toggleCategory(category)} className={selectedCategory === category ? 'selected-category' : ''}>{category}</div>
          ))
        }
        <div className='category-items'>
          {
            data.items
            .filter((item: DataItem) => selectedCategory === '' ? true : item.category === selectedCategory)
            .map((item: DataItem) => (
              <div className='category-item'> {item.title} </div>
            )
            )
          }
        </div>
      </div>
        
      : null
    }
      
    </div>
  );
};

export default Part2;
