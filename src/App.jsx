import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/layer/RootLayout";

import Home from "./components/page/Home";
import Shop from "./components/page/Shop";
import About from "./components/page/About";
import Contacts from "./components/page/Contacts";
import Journal from "./components/page/Journal";
import Error from "./components/page/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}/> 
      <Route path='/shop'  element={<Shop />}> </Route>
      <Route path='/about'  element={<About />}> </Route>
      <Route path='/contacts'  element={<Contacts />}> </Route>
      <Route path='/journal'  element={<Journal />}> </Route>
      <Route path='*'  element={<Error />}> </Route>
    </Route>
  )
);

const App = () => {
  return (
    <div> 
      
     
      <RouterProvider router={router}/>


  </div>
  )
}

export default App
