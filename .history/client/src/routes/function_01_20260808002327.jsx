import Regrequest from "../function-01/pages/registerrequest";
import AdminDah from "../function-01/pages/AdminDashboard";
import PlayerRequest from "../function-01/pages/PlayerRequests";
import Tform from "../function-01/component/tournamentform";
import TournamentPage from "../function-01/pages/tournament";
import Udash from "../function-01/pages/userDashboard/udash"
import Applyform from "../function-01/userDashboard/component/tApplyform";


const function_01 = [
   
    {path: "/pages/Regrequest" ,  element: <Regrequest/>  },
    {path: "/" ,  element: <AdminDah/>  },
    {path : "/pages/playerRequest" , element : <PlayerRequest/>},
    {path : "/component/tounform" , element : <Tform/>},
    {path: "/pages/tournament" ,  element: <TournamentPage/>  },
    {path: "/pages/udash" ,  element: <Udash/>  },
    {path : "/pages/applyform"  , element : <Applyform/>},


];


export default function_01;