import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        
        <div class="bg-blue-300 flex flex-row  justify-evenly py-3" >
            <Link class="link" to="/">Logo</Link> 
            <Link class="link" to="musteriler">Musteriler</Link> 
            <Link class="link" to="takvim">Takvim</Link> 
            <Link class="link" to="ic-satis">İç Satış</Link> 
            <Link class="link" to="dis-satis">Dış Satış</Link>
            <Link class="link" to="yeni-musteri">Yeni Müşteri</Link> 
         </div>
        
    )
}
