import Navbar1 from "./component/navbar/index";
import Card from "./component/main/index";
import Home from "./component/main/home.jsx"
import Discover from "./component/main/discover.jsx";
import Discovercard from "./component/main/discovercard.jsx";
import Schu from "./component/main/schu.jsx";
import Commu from "./component/main/conmu.jsx";

export default function App() {
  return (
    <div>
      <Navbar1/>
      <Card/> 
      <Home/>
      <Schu/>
      <Commu/>
      <Discover/>
      <Discovercard/>
    </div>
  );
}
