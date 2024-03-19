import { warn } from 'console';
import React from 'react';

type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
};

type CourseFieldsProps = {
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  updateCourse: () => void;
};

function CourseField({ course, setCourse, addNewCourse, updateCourse }: CourseFieldsProps) {

  const handleChange = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setCourse({ ...course, [field]: e.target.value });
  };

  const forms = [
    {
      label: 'Course Name',
      value: course.name,
      field: 'name',
    },
    {
      label: 'Course Number',
      value: course.number,
      field: 'number',
    },
    {
      label: 'Start Date',
      value: course.startDate,
      field: 'startDate',
    },
    {
      label: 'End Date',
      value: course.endDate,
      field: 'endDate',
    },
  ];

  const buttons = [
    {
      label: 'Add',
      onClick: addNewCourse,
    },
    {
      label: 'Update',
      onClick: updateCourse,
    },
  ]

  return (
    <div className='form-row' style={{ margin: '5px' }}>
      {forms.map((form, index) => (
      <div className='form-group' key={index}>
        <label>{form.label}</label>
        <input value={form.value} className="form-control"
            onChange={(e) => handleChange(form.field, e)}/>
        </div>
      ))}
      <div className="d-flex justify-content-start" style={{ paddingTop: '5px' }}>
        {buttons.map((button, index) => (
          <div style={{ paddingRight: '5px'}}>
            <button key={index} className='btn btn-danger' onClick={button.onClick}>
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default CourseField;
