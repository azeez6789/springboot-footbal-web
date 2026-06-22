import Homepage from '../common/pages/home'
import Login  from '../component/login'


const commonroutes = [
    {path: '/', element: <Homepage /> },
    {path: '/component/login' ,  element: <Login/>  },

];


export default commonroutes;