import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/LOGIN/Login";
import News from "../../Pages/News/News";
import Resister from "../../Pages/Resister/Resister";
import PriveteRoute from "../PriveteRoute/PriveteRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://dragon-news-server-sepia-mu.vercel.app/news')
            },
            {
                path:'category/:id',
                element: <Category></Category>,
                loader:({params})=> fetch(`https://dragon-news-server-sepia-mu.vercel.app/category/${params.id}`)
            },
            {
                path:'news/:id',
                element:<PriveteRoute> <News></News></PriveteRoute>,
                loader:({params})=>fetch(`https://dragon-news-server-sepia-mu.vercel.app/news/${params.id}`)
            },
            {
                path:'login/',
                element:<Login></Login>
            },
            {
                path:'resister',
                element:<Resister></Resister>
            }
        ]
    }
])