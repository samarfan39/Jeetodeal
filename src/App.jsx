import Home from './Components/Home';
import {createBrowserRouter} from "react-router-dom"
import './App.css'
import Test from './Test';
import Order from './Components/Order';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: "/order",
    element: <Order/>,

  },
  {
    path: "/test",
    element: <Test />,

  },
]);


export default App;
