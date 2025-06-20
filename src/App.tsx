
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// };

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;



