import React from 'react'
import '../App.css';
import { Link , Outlet } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
       <nav>
        <h1>Logo</h1>
            <Link to="musteriler">Musteriler</Link> |{" "}
            <Link to="takvim">Takvim</Link>
        </nav>
        <hr />
        <Outlet />
        </div>
    )
}
