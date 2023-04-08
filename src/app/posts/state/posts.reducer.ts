import { createReducer, on } from '@ngrx/store';
import { initialState } from './posts.state';

import { addPost, updatePost, deletePost } from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state: any, action: any) => {
    let post = { ...action.post };
    post.id = (parseInt(state.posts[state.posts.length - 1].id) + 1).toString();
    return { ...state, posts: [...state.posts, post] };
  }),
  on(updatePost, (state: any, action: any) => {
    let updatedPost = state.posts.map((post: any) => {
      return action.post.id === post.id ? action.post : post;
    });
    return { ...state, posts: updatedPost };
  }),
  on(deletePost, (state: any, action: any) => {
    const updatedPost = state.posts.filter((post: any) => {
      return post.id !== action.id;
    });
    return { ...state, posts: updatedPost };
  })
);

export function postsReducer(state: any, action: any) {
  return _postsReducer(state, action);
}
