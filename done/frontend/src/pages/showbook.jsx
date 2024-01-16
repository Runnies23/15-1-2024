import ReactDOM from 'react-dom';
import Bookpage from '../component/bookpage';
import Navbar from '../component/navbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const response = await fetch(`/book/${id}`);
        const json = await response.json();

        if (response.ok) {
          setBook(json);
        }
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchWorkout();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="">
        {book && <Bookpage book={book} />}
      </div>
    </div>
  );
};

export default ShowBook;
