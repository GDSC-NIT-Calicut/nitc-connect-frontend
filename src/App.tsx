
// import { BrowserRouter } from 'react-router-dom';
// import AppRoutes from './routes';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AppRoutes />
//     </BrowserRouter>
//   );
// };
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// //import Home from "./pages/Home";
// import About from "./pages/About";


// import { useAuth } from "./hooks/useAuth";

// function App() {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Routes>
//       <Route path="/" element={<Login />} />
//       {isLoggedIn && <Route path="/dashboard" element={<Dashboard />} />}
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// }
// export default App;
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Notifications from "./pages/Notifications";
// import About from "./pages/About";

// import { useAuth } from "./hooks/useAuth";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import About from "./pages/About";
// import Notifications from "./pages/Notifications"; // Make sure this points to Notifications/index.tsx
// import { useAuth } from "./hooks/useAuth";

// function App() {
//   const { isLoggedIn } = useAuth();

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         {isLoggedIn && (
//           <>
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/notifications" element={<Notifications />} />
//           </>
//         )}
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Notifications from "./pages/Notifications"; // Should point to Notifications/index.tsx
import { useAuth } from "./hooks/useAuth";


function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {isLoggedIn && (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/notifications" element={<Notifications />} />
        </>
      )}
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;






