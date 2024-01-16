import schudule from '../assets/schudule.png'

const Schu = () => {
   return(
     <div className='h-screen w-screen font-normal text-neutral-950  flex items-center justify-center bg-booktheme'>
      <div className="bg-white w-5/6 h-3/4 rounded-[70px] shadow-md mt-14 drop-shadow-2xl flex-col flex items-center z-20">
        <div className="container mx-auto flex gap-32 mr-20 ml-96">
          <div>
            <h2 className="text-center font-semibold mb-4 flex mt-16 text-5xl ml-5">January</h2>
            <div className='items-center justify-center'><img src={schudule} className='h-52' alt="schedule" /></div>
          </div>
          <table className="w-3/5 border-collapseda mt-4 flex-col">
            <thead className="items-end">
              <tr className="bg-blue-500 border-neutral-950 w-20 bg-bookbuttom">
                <th className="text-center border border-neutral-950 w-40 ">Monday</th>
                <th className="text-center border border-neutral-950 w-40">Tuesday</th>
                <th className="text-center border border-neutral-950 w-40">Wednesday</th>
                <th className="text-center border border-neutral-950 w-40">Thursday</th>
                <th className="text-center border border-neutral-950 w-40">Friday</th>
                <th className="text-center border border-neutral-950 w-40">Saturday</th>
                <th className="py-4 text-center border border-neutral-950 w-40">Sunday</th>
              </tr>
            </thead>
            <tbody>
          <tr className='bg-blue-500 border-neutral-950 w-20 h-32'>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">1</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">2</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">3</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">4</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">5</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">6</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">7</td>
          </tr>
          <tr className='bg-blue-500 border-neutral-950 w-20 '>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">8</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">9</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">10</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">11</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">12</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">13</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">14</td>
          </tr>
          <tr className='bg-blue-500 border-neutral-950 w-20 '>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">15</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">16</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">17</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">18</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">19</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">20</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">21</td>
          </tr>
          <tr className='bg-blue-500 border-neutral-950 w-20 '>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">22</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">23</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">24</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">25</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">26</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">27</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">28</td>
          </tr>
          <tr className='bg-blue-500 border-neutral-950 w-20 '>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">29</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">30</td>
            <td className="h-32 text-center text-7xl opacity-30 border border-neutral-950 items-start justify-start pl-2 pt-2">31</td>
            <td className="h-32 border border-neutral-950"></td>
            <td className="h-32 border border-neutral-950"></td>
            <td className="h-32 border border-neutral-950"></td>
            <td className="h-32 border border-neutral-950"></td>
          </tr>
        </tbody>
            </table>
         </div>
         </div>
      </div>
)
}

export default Schu;