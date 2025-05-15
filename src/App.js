
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import RestaurantCard from './components/RestaurentCard'; 
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

const Grocery = React.lazy(() => import('./components/Grocery'));



function AppLayout() {
    const [userName, setUserName]=useState();
    console.log(userName);
    useEffect(()=>{
        const data={name:"kalyan"};
        setUserName(data.name);

    },[]);
    return (
        <UserContext.Provider value={{loggedInUser:userName}}>
            <div className='app-layout'>
                <Header />
                <Outlet/>
            </div>
        </UserContext.Provider>
    );
}


const appRouter= createBrowserRouter(
    [

        {
            path:"/",
            element: <AppLayout/>,
            children:[
                {
                    path:"/",
                    element: <Body/>
                },
                {
                    path:"/about",
                    element: <About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/restaurant/:resId",
                    element:<RestaurantMenu/>
                },
                {
                    path:"/grocery",
                    element:<Grocery/>
                }
            ],
            errorElement:<Error/>,  
            
        },
        
       

    ]
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);