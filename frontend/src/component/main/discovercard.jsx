import Singlecard from './singlecard'

export default function Discovercard(){
   return(
      <div className=' h-screen w-screen bg-booktheme'>
         <div className='flex flex-col items-center pt-44 gap-y-5 bg-booktheme'>
            <div className=' w-1/12 h-5  bg-bookbold justify-center rounded-[70px]'></div>
            <div className='navbar gap-x-20 justify-center'>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
            </div>
            <div className='navbar gap-x-20 justify-center  '>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
            </div>
            <div className='navbar gap-x-20 justify-center '>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
            </div>
            <div className='navbar gap-x-20 justify-center'>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
               <Singlecard/>
            </div>
            <div className=' w-1/12 h-5 justify-center rounded-[70px] mt-10 mb-20'><btn className='btn btn-ghost bg-bookbold justify-center  flex'>more...</btn></div>
         </div>
      </div>
)
}