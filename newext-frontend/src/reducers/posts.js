import { COMMENT } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
   
        case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id == +action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};
