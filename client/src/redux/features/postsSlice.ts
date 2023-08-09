import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PostsState = {
  posts: {
    _id: string;
  }[];
};

type InitialState = {
  value: PostsState;
};

const initialState = {
  value: {
    posts: [],
  } as PostsState,
} as InitialState;

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<PostsState>) => {
      state.value.posts = action.payload.posts;
    },
    setPost: (state, action: PayloadAction<any>) => {
      const updatedPosts = state.value.posts.map((post) => {
        if (post._id === action.payload.post_id) {
          return action.payload.posts;
        }
        return post;
      });

      state.value.posts = updatedPosts;
    },
  },
});

export const { setPosts, setPost } = postsSlice.actions;
export default postsSlice.reducer;
