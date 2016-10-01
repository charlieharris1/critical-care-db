import expect from 'expect';
import courseReducer from './courseReducers';
import * as courseActions from '../actions/courseActions';

describe('Course Action Reducers', () => {
  it('should update courses when passed CREATE_COURSE_SUCCESS', () => {
    const state = [
      { title: 'FirstCourseTitle' },
      { title: 'SecondCourseTitle' }
    ];
    const action = courseActions.createCourseSuccess({ title: 'ThirdCourseTitle' });

    const newState = courseReducer(state, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('FirstCourseTitle');
    expect(newState[1].title).toEqual('SecondCourseTitle');
    expect(newState[2].title).toEqual('ThirdCourseTitle');
  });

  it('should update courses when passed UPDATE_COURSE_SUCCESS', () => {
    const state = [
      { id: 'A', title: 'FirstCourseTitle' },
      { id: 'B', title: 'SecondCourseTitle' }
    ];
    const course = { id: 'B', title: 'NewCourseTitle' };
    const action = courseActions.updateCourseSuccess(course);

    const newState = courseReducer(state, action);
    const updatedCourse = newState.find(a => a.id === course.id );
    const untouchedCourse = newState.find(a => a.id === 'A');


    expect(newState.length).toEqual(2);
    expect(updatedCourse.title).toEqual(course.title);
    expect(untouchedCourse.title).toEqual('FirstCourseTitle');
  });
});