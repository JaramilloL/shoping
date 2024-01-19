import { createBrowserRouter } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageLogin from "../pages/PageLogin";
import PageRegister from "../pages/PageRegister";

export const router = createBrowserRouter([
    { 
        path: '/',
        element: <PageHome/>
    },
    { 
        path: '/login',
        element: <PageLogin/>
    },
    { 
        path: '/register',
        element: <PageRegister/>
    }
])