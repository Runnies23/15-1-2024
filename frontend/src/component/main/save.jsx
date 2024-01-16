import pook from '../../assets/pok.png'   

export default function Home(){
   return(
      <div className=' h-screen w-screen '>

         <div className='  navbar fixed justify-center w-screen gap-60 bg-midnight bg-opacity-50 '>
            <div className=' flex bg-tahiti bg-opacity-50'><img src={pook} className='size-1/2'/></div>
            <div className='border  flex-col bg-tahiti bg-opacity-50'>
               <div><button className='btn text-3xl'>Booking</button></div>
               <div className='border'>น้องกระบองเพชร</div>
            </div>
         </div>   


         <div className=' absolute bg-bookbuttom h-screen w-1/3 ml-80 -z-10'></div>
         <div class="flex items-center justify-center h-screen">
            <div class="bg-white w-5/6 h-3/4 rounded-[70px] shadow-md mt-14 drop-shadow-2xl -z-20 "></div>
            <div className=' absolute bg-booktheme h-screen w-screen -z-30'></div>  
         </div>
         
      </div>
   )
}