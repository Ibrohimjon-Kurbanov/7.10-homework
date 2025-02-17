import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Mainlayout from "../layout/Mainlayout";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <Mainlayout>
              <Home></Home>
            </Mainlayout>
          }
        ></Route>
        <Route
          path="/:id"
          element={
            <Mainlayout>
              <Details></Details>
            </Mainlayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}
export default App;
