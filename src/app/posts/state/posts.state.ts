import { Post } from 'src/app/models/posts.model';

export interface PostsState {
  posts: Post[];
}
export const initialState: PostsState = {
  posts: [
    { id: '1', title: 'sample data1', description: 'sample description1' },
    { id: '2', title: 'sample data2', description: 'sample description2' },
  ],
};
