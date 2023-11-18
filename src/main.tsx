import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import Layout from './pages/Layout.tsx'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About.tsx';
import News from './pages/MainPage.tsx'
import Contacts from './pages/Contacts.tsx';
import Gallery from './pages/Gallery.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/gallery',
        element: <Gallery />,
      },
    
      {
        path: '/about', element: <About />,

      },
      {
        path: '/', element: <News />,
      },

      {
        path: '/contacts', element: <Contacts />,

      },


    ]
  },


]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your app with Provider */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
