import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div className="d-flex">
        <div className="flex-fill" style={{ margin: '20px'}}>
          <ModuleList />
        </div>
        <div
          className="flex-grow-0 me-2 d-none d-lg-block"
          style={{ width: '250px', marginRight: '25px', overflow: 'scroll' }}
        >
          <Status />
        </div>
      </div>
    </div>
  );
}

export default Home;
