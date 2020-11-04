import { CREATE_COURSE } from '../actions/actionTypes';

const courseReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
};

export default courseReducer;
