import profile from '../../assets/profile.png'

export default function Commu(){
   return(
      <div className='h-auto w-screen font-normal text-neutral-950 bg-booktheme flex'>
        <div className=' w-1/6 h-auto bg-bookbuttom flex-col flex gap-5 items-center overflow-auto'>
          <div className=' w-72 h-72 bg-white  mt-32  flex items-center justify-center'> 
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
          <div className=' w-72 h-72 bg-white  flex items-center justify-center'>
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
          <div className=' w-72 h-72 bg-white  flex items-center justify-center'>
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
          <div className=' w-72 h-72 bg-white  flex items-center justify-center'>
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
          <div className=' w-72 h-72 bg-white  flex items-center justify-center'>
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
          <div className=' w-72 h-72 bg-white  flex items-center justify-center'>
            <img className=' items-center h-3/4 ' src={profile}/>
          </div>
        </div>

        <div className='w-5/6 h-auto bg-bigback z-20 flex flex-col items-center overflow-auto gap-20'>
          <div className=' w-[90rem] h-52 bg-white mt-44 flex gap-7 rounded-3xl drop-shadow-xl shadow-xl'>
            <div className=' mt-5 ml-5'><img src={profile} className='h-20'/></div>
            <div className=' w-auto mt-8 gap-5 flex-col flex'>
              <div className='text-5xl ml-3'>Name</div>
              <div className='w-[80rem] h-20 bg-bookbold rounded-3xl navbar'>
                <div className=' opacity-50 ml-5'>What do you think about...</div>
                <div></div>
              </div>
            </div>
          </div>

          <div className=' w-[90rem] h-96 bg-white flex gap-7 rounded-3xl drop-shadow-xl shadow-xl'>
            <div className=' mt-5 ml-5'><img src={profile} className='h-20'/></div>
            <div className=' w-auto mt-8 gap-5 flex-col flex'>
              <div className='text-2xl ml-3'>Name</div>
              <div className='w-[80rem] h-full bg-bookbold rounded-3xl navbar mb-6 gap-8 flex items-end round'>
                <div className=' w-11/12 h-16 bg-white ml-4  rounded-3xl'> 
                  <div className='text-3xl ml-6 opacity-50'>comment...</div>
                </div>
                <div className='rating mb-5'>
                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>

          <div className=' w-[90rem] h-96 bg-white flex gap-7 rounded-3xl drop-shadow-xl shadow-xl'>
            <div className=' mt-5 ml-5'><img src={profile} className='h-20'/></div>
            <div className=' w-auto mt-8 gap-5 flex-col flex'>
              <div className='text-2xl ml-3'>Name</div>
              <div className='w-[80rem] h-full bg-bookbold rounded-3xl navbar mb-6 gap-8 flex items-end round'>
                <div className=' w-11/12 h-16 bg-white ml-4  rounded-3xl'> 
                  <div className='text-3xl ml-6 opacity-50'>comment...</div>
                </div>
                <div className='rating mb-5'>
                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className=' w-[90rem] h-96 bg-white flex gap-7 rounded-3xl drop-shadow-xl shadow-xl'>
            <div className=' mt-5 ml-5'><img src={profile} className='h-20'/></div>
            <div className=' w-auto mt-8 gap-5 flex-col flex'>
              <div className='text-2xl ml-3'>Name</div>
              <div className='w-[80rem] h-full bg-bookbold rounded-3xl navbar mb-6 gap-8 flex items-end round'>
                <div className=' w-11/12 h-16 bg-white ml-4  rounded-3xl'> 
                  <div className='text-3xl ml-6 opacity-50'>comment...</div>
                </div>
                <div className='rating mb-5'>
                <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                </div>
              </div>
            </div>
          </div> 
          <div className="join bg-bookbuttom ">
            <button className="join-item btn btn-ghost">«</button>
            <button className="join-item btn  btn-ghost">Page 1</button>
            <button className="join-item btn  btn-ghost">»</button>
          </div>
          <div>
          <div className="tooltip" data-tip=":D">
            <button className="btn btn-outline ">More....</button>
          </div>
          </div>
        </div>
      </div>
)
}