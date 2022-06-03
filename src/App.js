import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PageContainer from "./Pages/PageContainer";
import Account from "./Pages/Account";
import User from "./Pages/Users";
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageContainer />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />} />
          <Route path="/account" element={<Account />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
