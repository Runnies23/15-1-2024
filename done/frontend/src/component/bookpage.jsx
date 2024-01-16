import { Link } from 'react-router-dom';
import pook from '../assets/pok.png'   

const Bookpage = ({ book }) => {
   return(
      <div className='h-screen w-screen font-serif text-neutral-950'>
         <div className='h-screen justify-center navbar absolute z-20 gap-36'>
            <div className=' h-3/4 drop-shadow-2xl ml-28 mt-10'><img src={book.imageUrl || pook} className='h-4/5' alt='Book Cover' /></div>
            <div className='  w-2/5 h-2/3 mt-12 flex-col space-y-4 pt-4'>
               <div className='   ml-auto mb-12 flex'>
                  <div>add favorite</div>
                  <i class="fa-regular fa-heart font-xl"></i>
               </div>
               <div className=' mr-auto text-6xl'>{book.name}</div>
               <div className='   mr-auto text-2xl'>{book.detail}</div>
               <div className='mr-auto space-x-2'>
                  <div className=' bg-booktag  mr-auto btn btn-ghost btn-sm w-14 rounded-3xl'>tag</div>
                  <div className=' bg-booktag  mr-auto btn btn-ghost btn-sm w-14 rounded-3xl'>ta2</div>
               </div>
               <div className=' mr-auto m-3 '>{book.rating}</div>
               <div className='  mr-auto'><button className=' outline-bookbuttom bg-transparent  btn btn-lg text-4xl rounded-3xl'>Booking</button></div>
            </div> 
         </div>
         <div className=' absolute ml-80 bg-bookbold w-1/4 h-screen z-10'></div>
         <div class="flex items-center justify-center h-screen">
            <div class="bg-white w-5/6 h-3/4 rounded-[70px] shadow-md mt-14 drop-shadow-2xl -z-10 "></div>
            <div className=' absolute bg-booktheme h-screen w-screen -z-20'></div>  
         </div>
         
         
         
      </div>
   )
}
export default Bookpage;