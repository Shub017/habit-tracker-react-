import React from 'react';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import { HabitTracker } from './Component/HabitTracker';
import { HomePage } from './Component/HomePage';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<><HomePage/></>
    },
    {
      path:'/HabitTracker',
      element:<><HabitTracker /></>
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
