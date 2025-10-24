import type { PostState, PostAction, Post } from "./types";

const initialState: PostState = {
  list: [],
  postToEdit: null,
};

export const postsReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case "SET_POSTS":
      return { ...state, list: action.payload as Post[] };
    case "REMOVE_POST_FROM_STATE":
      return {
        ...state,
        list: state.list.filter((post) => post.id !== (action.payload as number)),
      };
    case "SET_POST_TO_EDIT":
      return { ...state, postToEdit: action.payload as Post | null };
    case "UPDATE_POST_LOCAL":
      return {
        ...state,
        list: state.list.map((post) =>
          post.id === (action.payload as Post).id ? (action.payload as Post) : post
        ),
      };
    case "ADD_POST_LOCAL":
      return { ...state, list: [action.payload as Post, ...state.list] };
    default:
      return state;
  }
};
