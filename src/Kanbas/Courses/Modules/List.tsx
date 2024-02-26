import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0] ?? {});

  const buttonStyle: React.CSSProperties = {
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
    height: '100%',
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
            <select className="form-select" style={buttonStyle}>
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
        <li className="list-group-item">
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
          <li key={index}
            className="list-group-item"
            /* onClick={() => setSelectedModule(module)}> */
              >
              <button
                onClick={() => dispatch(setModule(module))}>
                Edit
            </button>

              <button
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {module._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
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
