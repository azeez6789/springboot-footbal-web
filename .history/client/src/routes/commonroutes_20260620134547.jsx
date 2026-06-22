import Homepage from "../common/pages/home";
import Login  from "../common/component/login";
import Register from "../common/component/register";


const commonroutes = [
    {path: "/", element: <Homepage /> },
    {path: "/component/login" ,  element: <Login/>  },
    {path: "/component/register" ,  element: <Register/>  },

];


export default commonroutes;