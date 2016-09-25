import React from 'react';
import CourseRowList from './CourseRowList';

const CourseList = ({ courses }) => (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseRowList key={course.id} course={course}/>
      )}
      </tbody>
    </table>
);

CourseList.propTypes = {
  courses: React.PropTypes.array.isRequired
};
export default CourseList;