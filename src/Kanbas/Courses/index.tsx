import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoChevronForward } from "react-icons/io5";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import { COURSES_API } from "./Modules/client";

function Courses() {
  const { "*": path, courseId } = useParams();
  const crumbs = path?.split('/')

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };


  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      <div style={{ paddingLeft: '20px', display: 'flex', verticalAlign: 'middle' }}>
        <h3 style={{ color: 'red', display: 'inline'}}>
          <HiMiniBars3 /> {`${course?.name} `}
        </h3>
        <h4 style={{ display: 'inline', color: 'grey' }}> 
          {crumbs && crumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <IoChevronForward/> {` ${crumb} `}
            </React.Fragment>
          ))}
        </h4>
      </div>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div
          className="flex-fill overflow-y-scroll  bottom-0 end-0"
          style={{ top: "50px", padding: '25px' }} >
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

