import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaRegQuestionCircle, FaChevronUp, FaChevronDown } from "react-icons/fa";
import { TbCircleLetterC } from "react-icons/tb";
import { LuMonitorDown } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { HiMiniBars3 } from "react-icons/hi2";

function KanbasNavigation() {
  const [show, setShow] = useState(false);
  const { pathname } = useLocation();

  const toggleShow = () => {
    setShow(!show);
  }

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

  return (
    <>
      <div className="d-none d-md-block">
        <ul className="wd-kanbas-navigation">
          <li>
            <a href="http://northeastern.edu">
              <img alt="neu-logo" src="/images/neu_logo.png" width="100%"/>
            </a>
          </li>
          {links.map((link, index) => (
            <li key={index} className={` ${pathname.includes(link.label) ? "wd-active" : ""} ${link.classes ?? ''}`}>
              <Link to={`/Kanbas/${link.label}`}> {link.icon} <br/> {link.label} </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-block d-md-none" style={{ width: '100%' }}>
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'black' }}>
          <button className="navbar-toggler" type="button" onClick={toggleShow}>
            <HiMiniBars3 className="text-white" />
          </button>
          <Link className="navbar-brand" to="#">Navbar w/ text</Link>
          <button className="navbar-toggler" type="button" onClick={toggleShow}>
            <FaChevronDown className="text-white" />
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
      </div>
    </>
  );
}

export default KanbasNavigation;
