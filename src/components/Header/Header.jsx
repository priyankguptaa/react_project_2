import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header(){
    return(
        <div>
            <header>
                <nav>
                    <div>
                        <Link to='/'>Logo</Link>
                    </div>
                    <div>
                        <Link to='/'>About Us</Link>
                    </div>
                    <div>
                        <NavLink className={({isActive})=>{
                                `${isActive? "color-red" : "color-grey"}`
                        }}>
                            Home
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    )    
}