import pic from '../assets/44111.png'   
import pook from '../assets/pok.png'
import Singlediscovercard from './discovercard'
import Topsell from './topsell'

const Discover = ({book}) => {
   return(
      <div className='h-screen w-screen font-normal text-neutral-950  flex items-center justify-center '>

            <div class=" bg-bigback w-5/6 h-3/4 rounded-[70px] shadow-md mt-14 drop-shadow-2xl flex-col flex items-center z-20">
               <div className='text-4xl w-1/12 h-16 mt-6'>
                  <h1 className='text-center'>BOOKS</h1>
                  <div className='  bg-bookbold w-full h-2   text-center rounded-[70px]'></div>
               </div>
               <div className='navbar justify-center gap-10'>
                  <div className='flex flex-col items-start gap-y-8 w-1/4 '>
                  <div className=' text-5xl'>New & </div>
                  <div className=' text-5xl'>Trending</div>
                  <div className=""><input type="text" placeholder="... search something" className="input w-80 max-w-xs bg-white" /></div>
                  </div>
                  {book.length > 0 && <Topsell key={book[0]._id} book={book[0]} />}
               </div>
               <div className=' drop-shadow-md'><img src={pic} className=''/></div>

               <div className='flex navbar w-full justify-center h-1/3 z-20'>
                  <div className=''> <a href="#slide3" className="btn btn-circle btn-ghost bg-booktheme mr-10">❮</a></div>
                     <div className='flex w-10/12 justify-center gap-16 h-full' >  
                        {book.length > 0 && <Singlediscovercard key={book[0]._id} book={book[2]} />}
                        {book.length > 0 && <Singlediscovercard key={book[0]._id} book={book[3]} />}
                        {book.length > 0 && <Singlediscovercard key={book[0]._id} book={book[4]} />}
                     </div>
                  <div> 
                     <a href="#slide1" className="btn btn-circle btn-ghost bg-booktheme ml-10">❯</a></div>
               </div>
               
            </div>

            
            
            <div className=' absolute bg-booktheme h-screen w-screen -z-20'></div>     
         
         
         
      </div>
   )
}

export default Discover;