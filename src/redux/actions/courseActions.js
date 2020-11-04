import { CREATE_COURSE, DELETE_COURSE } from '../actions/actionTypes';

export function createCourse(course) {
  return { type: CREATE_COURSE, course };
}
