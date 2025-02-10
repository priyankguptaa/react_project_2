import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <>
            <div>
                <Link to = "/">
                    Home
                </Link>
            </div>
            <div>
                <Link to = "/">
                    Follow Us
                </Link>
            </div>
            <div>
                <Link to = "/">
                    Copyright 2025-2026
                </Link>
            </div>
        </>
    )
}
