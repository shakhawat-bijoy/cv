import React from 'react';
import Home from './componants/page/Home'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import RootLayout from './componants/layer/RootLayout';
import Error from './componants/page/Error';

const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        errorElement={<Error />}
      >
        <Route index element={<Home/>}></Route>
        <Route path='/work' ></Route>
        <Route path='/about' ></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App