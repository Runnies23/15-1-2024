import { set } from "mongoose";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Bookdetail from "../component/workoutdetail";
import Navbar from "../component/navbar";
import Bookcard from "../component/bookcard";
import Discover from "../component/discovery";

const Menu = () => {

   const [book,setbook] = useState(null);
   const { id } = useParams();

   useEffect( () => {
      const fetchworkout = async () => {
         const response = await fetch('/book')
         const json = await response.json()

         if(response.ok){
            setbook(json)
         }
      }

      fetchworkout()
   }, [id])

   return (
      <div>
      <Navbar/>
      <div className="">
      {book && <Discover key={book._id} book={book} />}
         <Bookcard/>
      </div>
   </div>

)}

export default Menu;