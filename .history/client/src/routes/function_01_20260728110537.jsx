import Regrequest from "../function-01/pages/registerrequest";
import AdminDah from "../function-01/pages/AdminDashboard";
import PlayerRequest from "../function-01/pages/PlayerRequests";
import Tform from "../function-01/component/tournamentform";

const function_01 = [
   
    {path: "/pages/Regrequest" ,  element: <Regrequest/>  },
    {path: "/" ,  element: <AdminDah/>  },
    {path : "/pages/playerRequest" , element : <PlayerRequest/>},
    {path : "/component/tournament" , element : <Tform/>},

];


export default function_01;