import React, { useState } from 'react';
import { Data, DataItem } from '../App';
import '../App.css';

interface Part3Props {
  data: Data,
}

const Part3: React.FC<Part3Props> = (props: Part3Props) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const {data} = props;

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
    <ul>

      {
        categoryArray
          .sort((a: string) => favourites.includes(a) ? -1 : 1)
          .map(category => (
            <li 
                onClick={() => toggleCategory(category)} 
                className={`${selectedCategory === category ? 'selected-category' : ''} ${favourites.includes(category) ? 'favourite-category' : ''}`} 
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

export default Part3;
