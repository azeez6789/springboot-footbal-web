import Homepage from "../common/pages/home"
import Login  from "../common/component/login"


const commonroutes = [
    {path: "/", element: <Homepage /> },
    {path: "/login" ,  element: <Login/>  },

];


export default commonroutes;