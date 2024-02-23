import { Link, useLocation } from "react-router-dom";
import "./index.css"; // feel free to use the CSS from previous assignments

function CourseNavigation() {
  const { pathname } = useLocation();

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Assignments",
    "Grades",
  ];

  return (
    <>
      <div className="d-none d-md-block">
        <ul className="wd-navigation">
          {links.map((link, index) => (
            <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
              <Link to={link}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CourseNavigation;
