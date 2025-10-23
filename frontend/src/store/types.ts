export interface Post {
  id: number;
  userID: number;
  title: string;
  body: string;
}

export interface PostAction {
  type: string;
  payload?: any;
}
