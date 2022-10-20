import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { blogApi } from 'api/blogApi';
import { requestStatus } from 'common/enums/requestStatus';
import { appActions } from 'features/Application';
import { PostType } from 'features/Blog/blogTypes';
import { blogActions } from 'features/Blog/index';

const requestTime = 1500;

const getPostsTC = createAsyncThunk('blog/getPostsTC', async (param, { dispatch }) => {
  try {
    dispatch(appActions.setAppStatus({ status: requestStatus.LOADING }));
    setTimeout(async () => {
      const response = await blogApi.getPosts();

      dispatch(blogActions.setPosts({ posts: response.data }));
      dispatch(appActions.setAppStatus({ status: requestStatus.SUCCEEDED }));
    }, requestTime);
    // eslint-disable-next-line no-empty
  } catch (e) {}
});

export const asyncActions = {
  getPostsTC,
};

export const slice = createSlice({
  name: 'blog',
  initialState: {
    posts: [] as PostType[],
    categories: [{category: 'Treatment', logo: ''}]
  },
  reducers: {
    setPosts(state, action: PayloadAction<{ posts: PostType[] }>) {
      state.posts = action.payload.posts;
    },

    addPost(state, action: PayloadAction<{ post: PostType }>) {
      state.posts.unshift(action.payload.post);
    },
  },
});
