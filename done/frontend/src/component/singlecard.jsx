import { Link } from 'react-router-dom';
import pook from '../assets/pok.png'   
import Bookpage from './bookpage';

const Singlecard = ({ book }) => {
   return(
      <div className="card w-72 bg-base-100 rounded-t-2xl drop-shadow-lg  shadow-xl">
      <figure className='h-52  bg-bookbold w-full  '><img src={pook} className='h-40'/></figure>
      <div className="card-body bg-white rounded-b-2xl text-neutral-950">
         <div className='flex gap-2'>
            <div><button className='btn btn-xs rounded-3xl bg-bookbuttom btn-ghost'>tag</button></div>
            <div><button className='btn btn-xs rounded-3xl bg-bookbuttom btn-ghost'>tag</button></div>
         </div>
         <h2 className="card-title">{book.name}</h2>
         <p>{book.discript}</p>
         <div className="card-actions justify-end">
            <button className="btn btn-ghost bg-booktag"><Link key={book._id} to={`/books/${book._id}`}>
            Booking now
          </Link></button>
            
         </div>
      </div>
      </div>
   )
}
export default Singlecard;