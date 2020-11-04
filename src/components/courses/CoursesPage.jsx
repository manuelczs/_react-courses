import React from 'react';
import { connect } from 'react-redux';
import { createCourse } from '../../redux/actions/courseActions';
//import * as courseActions from '../../redux/actions/courseActions.jsx';
import PropTypes from 'prop-types';

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: '',
        id: '',
        authorId: '',
        slug: '',
        category: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createCourse(this.state.course);
    this.setState({ course: { title: '' } });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Courses</h2>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form>
        <div>
          {this.props.courses.map((item, key) => {
            return <div key={key}>{item.title}</div>;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCourse: (course) => dispatch(createCourse(course)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
