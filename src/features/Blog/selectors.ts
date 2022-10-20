import { AppRootStateType } from 'app/store';
import { PostType } from 'features/Blog/blogTypes';

export const getPosts = (state: AppRootStateType): PostType[] => state.blog.posts;
