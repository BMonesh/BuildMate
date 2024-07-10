import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ProfilePage from "./Components/ProfilePage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/profile"
            element={<ProfilePage UserType={"buyer"} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
