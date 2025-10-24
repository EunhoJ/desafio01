export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostAction {
  type: string;
  payload?: Post | Post[] | number | null;
}

export interface PostState {
  list: Post[];
  postToEdit: Post | null;
}

export interface RootState {
  posts: PostState;
}
