import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaRegQuestionCircle } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import { LuMonitorDown } from "react-icons/lu";

function KanvasMobileNavBar() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const iconStyle: React.CSSProperties = {
    color: 'red',
    fontSize: '2em',
    marginBottom: '5px',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'red',
  }

  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />, classes: 'wd-account'},
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={iconStyle}/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" style={iconStyle}/>           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" style={iconStyle}/> },
    { label: "History",  icon: <FaRegClock className="fs-2" style={iconStyle}/> },
    { label: "Studio",  icon: <LuMonitorDown className="fs-2" style={iconStyle}/> },
    { label: "Commons",  icon: <TbCircleLetterC className="fs-2" style={iconStyle}/> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2" style={iconStyle}/> },
  ];

  const toggleShow = () => {
    setShow(!show);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="#">Navbar w/ text</Link>
      <button className="navbar-toggler" type="button" onClick={toggleShow}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto">
          {links.map((link, index) => (
            <li key={index} className={` ${pathname.includes(link.label) ? "wd-active" : ""} ${link.classes ?? ''}`}>
              <Link style={linkStyle} to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );

}

export default KanvasMobileNavBar;
