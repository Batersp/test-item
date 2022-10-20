import { AppRootStateType } from 'app/store';
import { CategoriesType, PostType } from 'features/Blog/blogTypes';

export const getPosts = (state: AppRootStateType): PostType[] => state.blog.posts;
export const getCategories = (state: AppRootStateType): CategoriesType =>
  state.blog.categories;
