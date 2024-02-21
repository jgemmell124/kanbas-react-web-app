import { Link } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { courses } from "../Database";
import './index.css'

function Dashboard() {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
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
                  </Link>
                  <p className="card-subtitle">{course._id}.32322.202430</p>
                  <p className="card-text">202430_1_Spring 2024 Full Term</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="stretched-link btn">
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
