import Homepage from "../common/pages/home";
import Login  from "../common/component/login";
import Register from "../common/component/register";
import About from "../common/component/About";


const commonroutes = [
    {path: "/", element: <Homepage /> },
    {path: "/component/login" ,  element: <Login/>  },
    {path: "/component/register" ,  element: <Register/>  },
    {path: "/component/about" ,  element: <About/>  },

];


export default commonroutes;