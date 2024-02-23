import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter((a) => a.course === courseId);

  const buttonStyle = {
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
    height: '100%',
  };

  return (
    <div>
      <h2>Assignments</h2>
      {/* add buttons here */}
      <div className="d-flex justify-content-end wd-button-group">
        <div className="p2" style={{ 'display': 'grid'}}>
          <input className="form-control" type={'text'} style={{ borderRadius: '5px', ...buttonStyle }} placeholder="Search For Assignments"/>
        </div>
        <div className="p2">
          <button style={buttonStyle} className="btn btn-light">+ Group</button>
        </div>
        <div className="p2">
          <button className="btn btn-danger">+ Assignment</button> </div>
        <div className="p2">
          <select className="form-select" style={buttonStyle}>
            <option>Edit Assignment Dates</option>
          </select>
        </div>
      </div>

      <hr/>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment, index) => (
              <li key={index} className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Assignments;
