import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { blogApi } from 'api/blogApi';
import { requestStatus } from 'common/enums/requestStatus';
import { appActions } from 'features/Application';
import { CommentType, InitialStateType, PostType } from 'features/Blog/blogTypes';
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
    posts: [],
    categories: [
      {
        category: 'All',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb4cnmIIGCRteSXCJMxG9cEaYks9ttrDzdTA&usqp=CAU',
      },
      {
        category: 'Treatment',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPlU8yqMs-b7qvdu2XyRtDvRr0i9VegZOCgw&usqp=CAU',
      },
      {
        category: 'Training',
        logo: 'https://cdn-icons-png.flaticon.com/512/6381/6381369.png',
      },
      {
        category: 'Feeding',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbS28dl6YR3ybSJaZ3W4xuCmNb2AReSP8Y6A&usqp=CAU',
      },
      {
        category: 'Care',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVZFXi6jbsy3QMLCULv7nkckIUJt_KvOByg&usqp=CAU',
      },
    ],
  } as InitialStateType,
  reducers: {
    setPosts(state, action: PayloadAction<{ posts: PostType[] }>) {
      state.posts = action.payload.posts;
    },

    addPost(state, action: PayloadAction<{ post: PostType }>) {
      state.posts.unshift(action.payload.post);
    },

    addComment(
      state,
      action: PayloadAction<{ newComment: { comment: CommentType; postId: string } }>,
    ) {
      const index = state.posts.findIndex(
        ({ id }) => id === action.payload.newComment.postId,
      );

      state.posts[index].comments.unshift(action.payload.newComment.comment);
    },

    deleteComment(state, action: PayloadAction<{ commentId: string; postId: string }>) {
      const indexPost = state.posts.findIndex(({ id }) => id === action.payload.postId);

      const indexComment = state.posts[indexPost].comments.findIndex(
        ({ id }) => id === action.payload.commentId,
      );

      state.posts[indexPost].comments.splice(indexComment, 1);
    },

    addLike(
      state,
      action: PayloadAction<{ postId: string; commentId: string; likeCount: string }>,
    ) {
      const indexPost = state.posts.findIndex(({ id }) => id === action.payload.postId);
      const indexComment = state.posts[indexPost].comments.findIndex(
        ({ id }) => id === action.payload.commentId,
      );

      state.posts[indexPost].comments[indexComment].likeCount = action.payload.likeCount;
    },
  },
});
