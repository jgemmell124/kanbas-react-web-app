import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  const buttonStyle = {
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
  };

  return (
    <>
      <div className="d-flex justify-content-end wd-button-group">
          <div className="p2">
            <button  style={buttonStyle} type="button" className="btn btn-light">Collapse All</button>
          </div>
          <div className="p2">
            <button style={buttonStyle} type="button" className="btn btn-light">View Progress</button>
          </div>
          <div className="p2">
            <select className="form-select">
              <option>Publish All</option>
            </select>
          </div>
          <div className="p2">
            <button type="button" className="btn btn-danger">
              <span>
                + Module
              </span>
            </button>
          </div>
          <div className="p2">
          <button type="button" className="btn btn-light" style={{ height: '100%', ...buttonStyle }}>
              <span>
              <BsThreeDotsVertical />
              </span>
            </button>
          </div>
        </div>
        <hr/>

      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ModuleList;
