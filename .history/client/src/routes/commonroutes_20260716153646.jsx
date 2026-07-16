import Homepage from "../common/pages/home";
import Login  from "../common/component/login";
import Register from "../common/component/register";
import About from "../common/component/About";
import TournamentPage from "../common/pages/tournament";
import EventPage from "../common/pages/event";
import TicketPage from "../common/pages/ticket";


const commonroutes = [
    {path: "/", element: <Homepage /> },
    {path: "/component/login" ,  element: <Login/>  },
    {path: "/component/register" ,  element: <Register/>  },
    {path: "/component/about" ,  element: <About/>  },
    {path: "/pages/tournament" ,  element: <TournamentPage/>  },
    {path: "/pages/event" ,  element: <EventPage/>  },
    {path: "/pages/ticket" ,  element: <TicketPage/>  },

];


export default commonroutes;