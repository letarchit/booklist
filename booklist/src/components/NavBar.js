import React , { useContext } from 'react'
import {BookContext} from '../contexts/BookContext';


const NavBar = () => {
    const { books } = useContext(BookContext)
    console.log(books.length)
    return ( 
        <div className ="navbar">
            <h1>Ninja Reading List</h1>
             <p>Currently you have {books.length} to go through...</p>
        </div>
     );
}
 
export default NavBar;