import React from 'react';
import { Link } from 'react-router';

const CourseRowList = ({ course }) => (
  <tr>
    <td><a href={course.watchHref} target="_blank">Watch</a></td>
    <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
    <td>{course.title}</td>
    <td>{course.authorId}</td>
    <td>{course.category}</td>
    <td>{course.length}</td>
  </tr>
);

CourseRowList.propTypes = {
  course: React.PropTypes.object.isRequired
};
export default CourseRowList;
