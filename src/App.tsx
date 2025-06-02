// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
