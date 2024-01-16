import Singlecard from "./singlecard";
import Discover from "./discovery";
import Bookcard from "./bookcard";

const Bookdetail = ({ book }) => {
   return(
         <div className="flex pt-52 bg-booktheme">
            <Bookcard/>
         </div>   
   )
}

export default Bookdetail;