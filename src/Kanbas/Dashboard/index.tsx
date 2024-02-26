import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import './index.css'

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
      <input value={course.name} className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button className="btn btn-primary" onClick={addNewCourse}>
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse}>
        Update
      </button>
      <h2>Published Courses (8)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col wd-course-card" style={{ width: 300 }}>
              <div className="card">
                <img alt="class-img" src={`/images/${course.image}`} className="card-img-top"
                  style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name}
                    <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                      Delete
                    </button>
                    <button onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                      Edit
                    </button>
                  </Link>
                  <p className="card-subtitle">{course.number}.{course._id}.{course.endDate}</p>
                  <p className="card-text">{course.startDate} Full Term</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn">
                    <BsPencilSquare className="bs" />
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
