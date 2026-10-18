import Regrequest from "../function-01/pages/AdminDashboard/registerrequest";
import AdminDah from "../function-01/pages/AdminDashboard/AdminDashboard";
import PlayerRequest from "../function-01/pages/AdminDashboard/PlayerRequests";
import Tform from "../function-01/component/AdminDashboard/tournamentform";
import TournamentPage from "../function-01/pages/AdminDashboard/tournament";
import Udash from "../function-01/pages/userDashboard/udash"
import Applyform from "../function-01/component/userDashboard/tApplyform";
import UserDash from "../function-01/pages/userDashboard/UserDashboard";
import Tab2 from "../function-01/pages/userDashboard/tab2";
import Tab3 from "../function-01/pages/userDashboard/tab3";
import Tab4  from "../function-01/pages/userDashboard/tab4";
import Tab5 from "../function-01/pages/userDashboard/tab5";


const function_01 = [
   
    {path: "/pages/Regrequest" ,  element: <Regrequest/>  },
    {path: "/" ,  element: <AdminDah/>  },
    {path : "/pages/playerRequest" , element : <PlayerRequest/>},
    {path : "/component/tounform" , element : <Tform/>},
    {path: "/pages/tournament" ,  element: <TournamentPage/>  },
    {path: "/pages/udash" ,  element: <Udash/>  },
    {path : "/pages/applyform"  , element : <Applyform/>},
    {path : "/pages/userDash"  , element : <UserDash/>},
    {path : "/pages/tab2"  , element : <UserDash/>},
    {path : "/pages/tab3"  , element : <UserDash/>},
    {path : "/pages/tab4"  , element : <UserDash/>},
    {path : "/pages/tab5"  , element : <UserDash/>},


];


export default function_01;