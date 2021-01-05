import React, { useState } from 'react';
import { Data, DataItem } from '../App';
import '../App.css';

interface Part3Props {
  data: Data,
}

const Part3: React.FC<Part3Props> = (props: Part3Props) => {
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

  const categoryArray: string[] = Array.from(new Set(data.items.map((item: DataItem) => item.category)));
  const favourites = data.favourite_categories;

  return (
    <div>
      <div onClick={toggleExpand}>
        <h1>Favourite List (click to {expand ? 'hide' : 'view'})</h1>
      </div>
      {expand
      ?
      <div>
        {
          categoryArray
            .sort((a: string) => favourites.includes(a) ? -1 : 1)
            .map(category => (
              <div onClick={() => toggleCategory(category)} className={selectedCategory === category ? 'selected-category' : ''}>
                {favourites.includes(category) ? '★ ' : '● '}{category}
              </div>
            ))
        }
        <div className='category-items'>
          {
            data.items
              .filter((item: DataItem) => selectedCategory === '' ? true : item.category === selectedCategory)
              .sort((a: DataItem, b: DataItem) =>
                a.title > b.title ? 1 : -1
              )
              .map((item: DataItem) => (
                <div className='category-item'>{`● ${item.title}`}</div>
              ))
          }
        </div>
      </div>
        
      : null
    }
      
    </div>
  );
};

export default Part3;
