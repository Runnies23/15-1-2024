import book from '../../assets/booklogo.png'

export default function card(){
   return(
    <div>
    <div className=' bg-booktheme w-1/4 h-screen absolute -z-10 blur'/>
    <div className=' bg-white w-screen h-screen absolute -z-20  '/>
    <div className='navbar h-screen z-10 '>
       <div className=' flow-root w-1/2 pl-36 '>
          <div className=' text-6xl'>Find the Best online Libary</div>
          <div className='text-2xl my-20'>Welcome everyone this platform will helped you communicate with other about “Sharing your favourite books” and create your dream become true, Mhee-hlengg Website</div>
          <button className="btn btn-ghost btn-lg bg-bookbuttom outline-bookbuttom">Aboute us</button>
       </div>
       <div className='mt-10 size-4/5 w-fit ml-9'><img src={book} className='h-full'/></div>
    </div>
 </div>
   );
}