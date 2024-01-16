import pook from '../assets/pok.png'   
import { Link } from 'react-router-dom';

const Topsell = ({book}) => {
   return(
      <div className='flex     w-1/3 h-full gap-8'>
         <div className='h-52 w-1/4 bg-booktag flex items-center justify-center z-20 rounded-[20px] drop-shadow-2xl shadow-xl'>
            <div className=' items-center'> 
               <img src={pook} className=' items-center  h-40 drop-shadow-md'/>
            </div>
         </div>
         <div className=' bg-white h-full w-1/2 rounded-[20px] drop-shadow-2xl shadow-xl   pt-8   pl-5'>
            <div className='text-5xl'>#1 sale</div>
            <div className='text-3xl'>{book.name}</div>
            <button className="btn btn-ghost bg-booktag"><Link key={book._id} to={`/books/${book._id}`}>
            Booking
          </Link></button>
         </div>
      </div>
   )           
}

export default Topsell;