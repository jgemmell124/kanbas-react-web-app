import { Link } from "react-router-dom";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import './index.css'
import CourseField from "./CourseField";

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

type DashboardProps = {
  courses:  Course[],
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
};

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }: DashboardProps) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <hr />
      <h5>Course</h5>
      <CourseField
        course={course}
        setCourse={setCourse}
        addNewCourse={addNewCourse}
        updateCourse={updateCourse}
      />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col wd-course-card" style={{ width: 300, height: 'auto' }}>
              <div className="card">
                <img alt="class-img" src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }}/>
                <div className="card-body">
                  <div className="d-flex justify-content-between" style={{ alignItems: 'center'}}>
                    <div>
                      <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                        {course.name}
                      </Link>
                    </div>
                    <div className="d-flex">
                      <div title="Delete" className="btn btn-light" onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}>
                        <FaTrash />
                      </div>
                      <div title="Edit" className="btn btn-light" onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}>
                        <FaPencilAlt />
                      </div>
                    </div>
                  </div>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} style={{ textDecoration: 'none' }}>
                    <p className="card-subtitle">{course.number}.{course._id}.{course.endDate}</p>
                    <p className="card-text">{course.startDate} Full Term</p>
                  </Link>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-light">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
