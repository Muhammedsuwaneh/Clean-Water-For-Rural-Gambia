import { createBrowserRouter, 
  Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
 
 // pages
import Home from './pages/home';
import Donate from './pages/donate';
 
 // layouts
 import RouteLayout from './layouts/RouteLayout';
 
 // the navlink component adds the active class automatically
 
 const router = createBrowserRouter(
   createRoutesFromElements(
       <Route path="/" element={<RouteLayout />}>
         <Route index element={<Home />} />
         <Route path="donate" element={<Donate />} />
       </Route>
   )
 );
 
 function App() {
   return (
       <RouterProvider router={router} />
   );
 }
 
 export default App