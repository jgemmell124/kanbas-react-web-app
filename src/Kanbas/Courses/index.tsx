import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const page = useLocation();

  return (
    <div>
      <div className="d-none d-md-block" style={{ paddingLeft: '20px', display: 'flex', verticalAlign: 'middle' }}>
        <h3 style={{ color: 'red', display: 'inline'}}>
          <HiMiniBars3 /> {course?.name}
        </h3>
        <h4 style={{ display: 'inline', color: 'grey' }}> 
          <span> </span>
          <IoChevronForward /> {page.pathname.split('/').slice(-1)} 
        </h4>
      </div>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div
          className="flex-fill overflow-y-scroll  bottom-0 end-0"
          style={{ top: "50px", paddingRight: '25px' }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;

