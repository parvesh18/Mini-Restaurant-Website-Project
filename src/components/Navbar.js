import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <div className='flex justify-center pt-10 mx-auto'>
                <ul className='flex justify-evenly text-xl font-sans font-semibold w-[400px] tracking-wider rounded-md py-3 bg-fuchsia-700 border-4 border-white text-white mx-3'>
                    <li className='hover:scale-110 hover:underline hover:underline-offset-2'><Link to="/">South</Link></li>
                    <li className='hover:scale-110 hover:underline hover:underline-offset-2'><Link to="/mix">Chinese</Link></li>
                    <li className='hover:scale-110 hover:underline hover:underline-offset-2'><Link to="/pizza">Pizza</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
