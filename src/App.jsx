
import './App.css';


import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Framework from './Framework/Framework';
import Contact from './Contact/Contact';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from './Layout/Layout';
import Notfound from './Notfound/Notfound';



let routers = createBrowserRouter([
  {path: "" , element: <Layout/> , children: [
    {path : "About" , element: <About/>},
    {path : "Contact" , element: <Contact/>},
    {path : "Start-Framework" , element: <Framework/>},
    {path : "Portfolio" , element: <Portfolio/>},
    {path : "*" , element: <Notfound/>}
]}
])


export default function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
 
  );
}


