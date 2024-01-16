import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
      <header className={` z-50 font-sans size-28 fixed navbar w-full ${isScrolled ? 'bg-white shadow-md' : ''}`}>
  <div className="flex-1 ">

    <div className="tooltip" data-tip="Hello-there">
            <button className="btn btn-ghost text-5xl px-10 ">Sw3 Book</button>
          </div>
  </div>
  <div className=" justify-end flex-none w-3/5 ">
    <ul className=" text-xl menu menu-horizontal px-10 bg-red-1 gap-16">
      <li><Link to="/">Home</Link></li> 
      <li><Link to="/menu">menu</Link></li>  
      <li><Link to="/schedule">Schedule</Link></li>
      <li><Link to="/comunity">Comunity</Link></li>
      <div className="dropdown dropdown-end"> 
    </div>
    </ul>
  </div>

</header>
  );
};

export default Navbar;

