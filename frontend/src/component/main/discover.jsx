import pic from '../../assets/44111.png'   
import pook from '../../assets/pok.png'   

export default function Discover(){
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
                  <div className='flex     w-1/3 h-full gap-8'>
                     <div className='h-52 w-1/4 bg-booktag flex items-center justify-center z-20 rounded-[20px] drop-shadow-2xl shadow-xl'>
                        <div className=' items-center'> 
                           <img src={pook} className=' items-center  h-40 drop-shadow-md'/>
                        </div>
                     </div>
                     <div className=' bg-white h-full w-1/2 rounded-[20px] drop-shadow-2xl shadow-xl   pt-8   pl-5'>
                        <div className='text-5xl'>#1 sale</div>
                        <div className='text-3xl'>น้องกระบองเพชร</div>
                        <div><button className=' btn-sm btn btn-outline'>Booking</button></div>
                     </div>
                  </div>
               </div>
               <div className=' drop-shadow-md'><img src={pic} className=''/></div>



               <div className='flex navbar w-full justify-center h-1/3 z-20'>
                  <div className=''><button className=' btn-sm btn btn-outline '>left</button></div>
                     <div className='flex w-10/12 justify-center gap-20 h-full' >  
                        <div  className='w-1/4 bg-white flex h-52 pl-3 gap-4  drop-shadow-2xl shadow-xl rounded-[20px] '>
                           <div className=' justify-center items-center flex'>
                              <img src={pook} className='h-48'/>
                           </div>
                           <div className=' mt-4'>
                              <div>name - random</div>
                              <div>author - who create</div>
                              <div><button className=' btn-sm btn btn-ghost bg-booktag text-white'>Booking</button></div>
                           </div>
                        </div>
                        <div  className='w-1/4 bg-white flex h-52 pl-3 gap-4  drop-shadow-2xl shadow-xl  rounded-[20px]'>
                           <div className=' justify-center items-center flex'>
                              <img src={pook} className='h-48'/>
                           </div>
                           <div className=' mt-4'>
                              <div>name - random</div>
                              <div>author - who create</div>
                              <div><button className='btn-sm btn btn-ghost bg-booktag text-white'>Booking</button></div>
                           </div>
                        </div>
                        <div  className='w-1/4 bg-white flex h-52 pl-3 gap-4  drop-shadow-2xl shadow-xl rounded-[20px]'>
                           <div className=' justify-center items-center flex'>
                              <img src={pook} className='h-48'/>
                           </div>
                           <div className=' mt-4'>
                              <div>name - random</div>
                              <div>author - who create</div>
                              <div><button className=' btn-sm btn btn-ghost bg-booktag text-white'>Booking</button></div>
                           </div>
                        </div>
                     </div>
                  <div><button className=' btn-sm btn btn-outline'>right</button></div>
               </div>
            </div>
            
            <div className=' absolute bg-booktheme h-screen w-screen -z-20'></div>     
         
         
         
      </div>
   )
}