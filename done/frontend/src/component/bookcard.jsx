import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Singlecard from './singlecard';

const Bookcard = () => {
   const [books, setBooks] = useState([]); // Change the state variable name to 'books'

   useEffect(() => {
      const fetchBooks = async () => {
         try {
            const response = await fetch('/book');
            const json = await response.json();

            if (response.ok) {
               setBooks(json);
            }
         } catch (error) {
            console.error('Error fetching books:', error);
         }
      }

      fetchBooks();
   }, []);

   return (
      
      <div className="justify-center items-center  flex bg-booktheme">
            <div className=' pt-52 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-16 gap-x-32'>
            {books.map((book, index) => (
               <Singlecard key={`${book._id}_${index}`} book={book} />
            ))}
         </div>
      </div>
   );
}

export default Bookcard;
