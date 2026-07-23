import Regrequest from "../function-01/pages/registerrequest";
import AdminDah from "../function-01/pages/AdminDashboard";
import PlayerRequest from "../function-01/pages/PlayerRequests";

const function_01 = [
   
    {path: "/pages/Regrequest" ,  element: <Regrequest/>  },
    {path: "/" ,  element: <AdminDah/>  },
    {path : "/pages/playerRequest" , element : <PlayerRequest/>},

];


export default function_01;