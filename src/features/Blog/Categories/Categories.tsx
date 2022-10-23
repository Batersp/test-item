import React from 'react';

import style from './Categories.module.css';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { CategoryType } from 'features/Blog/blogTypes';
import { blogSelectors } from 'features/Blog/index';

type PropsType = {
  setCategory: (value: CategoryType) => void;
  filter: CategoryType;
};

export const Categories: React.FC<PropsType> = ({
  setCategory,
  filter,
}): ReturnComponentType => {
  const categories = useAppSelector(blogSelectors.getCategories);

  return (
    <div className={style.sections}>
      {categories.map(({ category, logo }) => (
        /* eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events */
        <div
          style={
            filter === category
              ? { backgroundColor: '#b148e3', borderBottom: 'solid 10px black' }
              : {}
          }
          key={category}
          onClick={() => setCategory(category)}
          className={`${style.item}`}
        >
          <img className={style.logo} src={logo} alt="logo" />
          <p className={style.category}>{category}</p>
        </div>
      ))}
    </div>
  );
};
