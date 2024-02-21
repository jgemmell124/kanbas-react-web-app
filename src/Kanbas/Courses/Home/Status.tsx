import { Link } from 'react-router-dom';
import { FaFileImport } from "react-icons/fa6";
import { SlCalender, SlTarget } from 'react-icons/sl';
import { FaCheckCircle } from 'react-icons/fa';
import { RiBarChart2Fill } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";
import { CiBellOn } from "react-icons/ci";

function Status() {

  const buttons = [
    { label: 'Import Existing Content', icon: <FaFileImport /> },
    { label: 'Import From Commons', icon: <FaFileImport /> },
    { label: 'Choose Home Page', icon: <SlTarget /> },
    { label: 'View Course Stream', icon: <RiBarChart2Fill /> },
    { label: 'New Announcement', icon: <GrAnnounce /> },
    { label: 'New Analytics', icon: <RiBarChart2Fill /> },
    { label: 'View Course Notifications', icon: <CiBellOn /> },
  ];

  const buttonStyle = {
    borderColor: '#dee2e6',
    border: '1px solid #dee2e6',
  };

  const comingUp = [
    { title: 'Lecture', course: 'CS4500.3343.2132', date: 'Sep 7 at 11:45am' },
    { title: 'CS5610 SP23 Lecture', course: 'CS4500.3343.2132', date: 'Sep 11 at 6pm' },
    { title: 'CS5610 Web Development Lecture', course: 'CS4500.3343.2132', date: 'Sep 11 at 1:35pm' },
  ];

  return (
    <div style={{ alignItems: 'center'}}>
      <h3>Course Status</h3>

      <div className="btn-group" style={{ width: '100%', ...buttonStyle}}>
        <button className="btn btn-light"><i className="fa-solid fa-ban"></i> Unpublish</button>
        <button disabled className="btn btn-success">
          <i className="fa-regular fa-circle-check"></i> Published
        </button>
      </div>

      <ul className="wd-status-button-group" style={{ listStyle: 'none'}}>
        {buttons.map((button, index) => (
          <li key={index} style={{ width: '100%'}}>
            <Link
              to={'#'}
              style={{ 
                display: 'inline-block',
                width: '100%',
                textAlign: 'left',
                ...buttonStyle
              }}
              className="btn btn-light">
              {button.icon} {button.label}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: '3px', borderBottom: '1px solid lightgrey' }}>
        <h6 style={{ margin: 0 }}><strong>To Do</strong></h6>
      </div>
      <ul style={{ listStyle: 'none', paddingLeft: '1rem' }}>
        <li>
          <FaCheckCircle style={{ color: 'red' }}/>
          <Link to="#" style={{ textDecoration: 'none', color: 'red' }}> Grade A1 - ENV + HTML</Link>
          <br/>
          <p style={{ color: 'grey' }}>100 points - Sep 18 at 11:59pm</p>
        </li>
      </ul>
      <br/>
      <div>
        <h6 className="float-start" ><strong>Coming Up</strong></h6>
        <div className="float-end">
            <SlCalender style={{ color: 'red' }}/>
            <Link to="#" style={{ textDecoration: 'none', color: 'red'}}> View Calender</Link>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
      <ul style={{ listStyle: 'none' }}>
        {comingUp.map((item, index) => (
          <li key={index}>
            <SlCalender style={{ color: 'red' }}/>
            <Link to="#" style={{ textDecoration: 'none', color: 'red'}}> {item.title} </Link>
            <br/>
            <p style={{ color: 'grey' }}>{item.course} <br/> {item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Status;
