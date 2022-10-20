import React, { useState } from 'react';

import style from './Blog.module.css';

import { useAppSelector } from 'common/hooks/useAppSelector';
import { ReturnComponentType } from 'common/types/ReturnComponentType';
import { CategoryType } from 'features/Blog/blogTypes';
import { Categories } from 'features/Blog/Categories/Categories';
import { blogSelectors } from 'features/Blog/index';
import { Post } from 'features/Blog/Post/Post';

export const Blog = (): ReturnComponentType => {
  const [filter, setFilter] = useState<CategoryType>('All');

  let filteredPosts = useAppSelector(blogSelectors.getPosts);

  if (filter !== 'All') {
    filteredPosts = filteredPosts.filter(({ category }) => category === filter);
  }

  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.title}>Блог</div>
        <Categories filter={filter} setCategory={setFilter} />
        <div className={style.posts}>
          {filteredPosts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
