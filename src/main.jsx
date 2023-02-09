import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Book from './Book'
import Error from './Error'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        // children: []
    },{
        path: '/book/:id',
        element: <Book />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
