import AscendingDescending from "../../components/AscendingDescending/AscendingDescending";
import Countries from "../../components/Countries/Countries";
//import OceaniaRegion from "../../components/OceaniaRegion/OceaniaRegion";
//import SmallerLithuania from "../../components/SmallerLithuania/SmallerLithuania";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home");




const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/countries',
        element: <Countries></Countries>
      },
      {
        path: '/AscendingDescending',
        element: <AscendingDescending></AscendingDescending>
      },
      // {
      //   path: '/SmallerLithuania',
      //   element: <SmallerLithuania></SmallerLithuania>
      // },
      // {
      //   path: '/OceaniaRegion',
      //   element: <OceaniaRegion></OceaniaRegion>
      // },
    ]
  }
]);



export default router;