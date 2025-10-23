import type { Post } from "./types";


export const fetchPosts = () => ({ type: 'FETCH_POSTS' });
export const setPosts = (posts: Post[]) => ({ type: 'SET_POSTS', payload: posts });

export const createPost = (post: Post) => ({ type: 'CREATE_POST', payload: post });
export const updatePost = (post: Post) => ({ type: 'UPDATE_POST', payload: post });
export const deletePost = (id: number) => ({ type: 'DELETE_POST', payload: id });
export const removePostFromState = (id: number) => ({ type: 'REMOVE_POST_FROM_STATE', payload: id });