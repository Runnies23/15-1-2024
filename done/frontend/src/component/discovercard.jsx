import pook from '../assets/pok.png'   
import { Link } from 'react-router-dom';

const Singlediscovercard = ({ book }) => {
   // Check if the book object is defined before accessing properties
   if (!book) {
     return <div>Error: Book data is undefined</div>; // or handle it in another way
   }
 
   return (
     <div className=' w-50 bg-white flex h-52 pl-3 gap-4 drop-shadow-2xl shadow-xl rounded-[20px]'>
       <div className='justify-center items-center flex'>
         <img src={pook} alt={book.name} className='h-48 w-36' />
       </div>
       <div className='mt-4'>
         <div className='text-xl'>{book.name}</div>
         <div className='mt-2'  >{book.discript}</div>
         <div>
           <button className="btn-sm btn btn-ghost bg-booktag text-white mt-8"><Link key={book._id} to={`/books/${book._id}`}>
            Booking
          </Link></button>
         </div>
       </div>
     </div>
   );
 };
 
 export default Singlediscovercard;