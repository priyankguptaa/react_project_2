import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import '../../App.css'

export default function Header(){
    return(
        <div>
            <header>
                <nav>
                    <div>
                        <Link to='/'>Logo</Link>
                    </div>
                    <div>
                        <Link to='/'>About</Link>
                    </div>
                    <div>
                        <NavLink to ="/" className={({isActive})=>{
                                `${isActive ? "main-r" : 'main-g'}`
                        }}>
                            Home
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to ="/about" className={({isActive})=>{
                                `${isActive? 'main-r' : 'main-g'}`
                        }}>
                          About
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to ="/Github" className={({isActive})=>{
                                `${isActive? 'main-r' : 'main-g'}`
                        }}>
                          Github
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    )    
}