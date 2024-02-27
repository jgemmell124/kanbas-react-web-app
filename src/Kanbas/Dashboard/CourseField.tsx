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

  const buttonStyle: React.CSSProperties = {
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
    height: '100%',
  };

  const forms = [
    {
      label: 'Course Name',
      value: course.name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCourse({ ...course, name: e.target.value }),
    },
    {
      label: 'Course Number',
      value: course.number,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCourse({ ...course, number: e.target.value }),
    },
    {
      label: 'Start Date',
      value: course.startDate,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCourse({ ...course, startDate: e.target.value }),
    },
    {
      label: 'End Date',
      value: course.endDate,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCourse({ ...course, endDate: e.target.value }),
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
            onChange={form.onChange}/>
        </div>
      ))}
      <div className="d-flex justify-content-start" style={{ paddingTop: '5px' }}>
        {buttons.map((button, index) => (
          <div style={{ paddingRight: '5px'}}>
            <button key={index} className='btn btn-light' style={buttonStyle} onClick={button.onClick}>
              {button.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


export default CourseField;
