import Regrequest from "../function-01/pages/registerrequest";
import AdminDah from "../function-01/pages/AdminDashboard";
import PlayerRequest from "../function-01/pages/PlayerRequests";
import Tform from "../function-01/component/tournamentform";
import TournamentPage from "../function-01/pages/tournament";


const function_01 = [
   
    {path: "/pages/Regrequest" ,  element: <Regrequest/>  },
    {path: "/" ,  element: <AdminDah/>  },
    {path : "/pages/playerRequest" , element : <PlayerRequest/>},
    {path : "/component/tournament" , element : <Tform/>},
    {path: "/pages/tournament" ,  element: <TournamentPage/>  },


];


export default function_01;