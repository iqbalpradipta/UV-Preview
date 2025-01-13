import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Page/home";
import Layout from "./Layout/layout";
import DashboardLayout from "./Layout/dashboardLayout";
import Dashboard from "./Page/dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path='/admin' element={<DashboardLayout />}>
            <Route path='/admin' element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
