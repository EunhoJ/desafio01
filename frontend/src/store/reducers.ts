import type { Post, PostAction } from './types';

const initialState: Post[] = [];

export const postsReducer = (state = initialState, action: PostAction): Post[] => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.payload;
    case 'REMOVE_POST_FROM_STATE':
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};
