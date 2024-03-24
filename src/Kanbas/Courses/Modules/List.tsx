import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaEdit, FaTrash, FaPencilAlt } from "react-icons/fa";
import { useParams } from "react-router";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import { 
  deleteModule as clientDeleteModules,
  createModule, 
  findModulesForCourse,
  updateModule as clientUpdateModule
} from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0] ?? {});

  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

    const handleDeleteModule = (moduleId: string) => {
    clientDeleteModules(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await clientUpdateModule(module);
    dispatch(updateModule(module));
  };



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
          <div className="form-group">
            <label>Module Name</label>
            <input value={module.name}
              style={{ width: '100%' }}
              className="form-control"
              onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <label>Description</label>
            <textarea value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
              className="form-control"
              style={{ width: '100%' }}
            />
            <div style={{ marginTop: '5px' }}>
              <button
                style={{ padding: '3px', borderRadius: '4px', marginRight: '5px' }}
                className="btn btn-primary"
                onClick={handleAddModule}>
                Add
              </button>
              <button
                style={{ padding: '3px', borderRadius: '4px' }}
                onClick={() => handleUpdateModule()}
                className="btn btn-secondary"
              >
                Update
              </button>
            </div>
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <button
                  title="Edit Module"
                  style={{ marginLeft: '4px', padding: '2px', borderRadius: '4px' }}
                  className="btn btn-secondary"
                  onClick={() => dispatch(setModule(module))}>
                  <FaPencilAlt /> 
                </button>

                <button
                  title="Delete Module"
                  style={{ marginLeft: '4px', padding: '2px', borderRadius: '4px' }}
                  className="btn btn-secondary"
                  onClick={() => handleDeleteModule(module._id)}>
                  <FaTrash />
                </button>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
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
