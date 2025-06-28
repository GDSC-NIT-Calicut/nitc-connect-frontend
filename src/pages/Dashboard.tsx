// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <p>Welcome to NITC Connect!</p>
//     </div>
//   );
// };

// export default Dashboard;
// src/pages/Dashboard.tsx
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Welcome to Dashboard!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;



