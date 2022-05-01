import React from 'react'
import Navbar from './Navbar'
import Pizza from './pages/Pizza'
import Mix from './pages/Mix'
import South from './pages/South'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function FullPage() {
    return (
        <div className='bg-slate-100'>
            <Navbar />
            <Routes>
                <Route path="/" element={<South />} />
                <Route path="mix" element={<Mix />} />
                <Route path="pizza" element={<Pizza />} />
            </Routes>
        </div>
    )
}

export default FullPage
