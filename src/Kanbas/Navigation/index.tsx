import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock } from "react-icons/fa";

function KanbasNavigation() {

  const iconStyle: React.CSSProperties = {
    color: 'red',
    fontSize: '2em',
    marginBottom: '5px',
  };

  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />, classes: 'wd-account'},
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" style={iconStyle}/>  },
    { label: "Courses",   icon: <FaBook className="fs-2" style={iconStyle}/>           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" style={iconStyle}/> },
    { label: "History",  icon: <FaRegClock className="fs-2" style={iconStyle}/> },
    { label: "Studio",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
    { label: "Commons",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
    { label: "Help",  icon: <FaRegCalendarAlt className="fs-2" style={iconStyle}/> },
  ];
  const { pathname } = useLocation();
  return (
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
  );
}

export default KanbasNavigation;
