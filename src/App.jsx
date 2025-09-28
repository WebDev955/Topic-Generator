//IMPORTS - HOOKS
import {createHashRouter, RouterProvider} from "react-router-dom";
//IMPORTS - COMPONENTS
import HomePage from './pages/HomePage'
import Favorites from "./pages/Favorites";
import RootLayout from "./pages/RootLayout";
import AccountCreationForm from "./components/AccountCreationForm";
//IMPORTS - STYLES
import './App.css'
import { AccountContext, AccountContextProvider } from "./components/AccountContext";



const router = createHashRouter([
  {
    path: "/", 
    element: <RootLayout/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: "favorites", element: <Favorites/>}
    ]
  },
]);

function App() {
  return (
    <>
      <AccountContextProvider>
        <RouterProvider router={router}/>
      </AccountContextProvider>
    </>
  )
}

export default App
