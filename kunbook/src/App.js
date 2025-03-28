import React from 'react';
import Home from './pages/Home';
import BookStore from './pages/BookStore';
import BookDetailsPage from './pages/BookDetailsPage';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/BookStore", element: <BookStore />,
        children:[
          {path: "/BookStore/:id", element: <BookDetailsPage />}
        ]
        },
    ]
  },

]);

function App() {
  return (
        <div className="min-h-screen bg-kunbook-background">
        <RouterProvider router={router} />
        </div>
  );
}

export default App;