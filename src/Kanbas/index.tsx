import KanbasNavigation from "./Navigation";
import KanbasMobileNavBar from "./Navigation/NavBar";
import Courses from "./Courses";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex flex-column flex-md-row" style={{ height: '100vh'}}>
      <KanbasNavigation/>
      {/* <div className="d-none d-md-block"> */}
      {/*   <KanbasNavigation /> */}
      {/* </div> */}
      {/* <div className="d-block d-md-none" style={{ width: '100%' }}> */}
      {/*   <KanbasMobileNavBar /> */}
      {/* </div> */}
      <div style={{ flexGrow: 1, overflow: 'scroll' }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas
