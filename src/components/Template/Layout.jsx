import React from 'react'
import SideBar from './SideBar'

import './template.css'

export default function Layout({ children }) {
    return (
        <main className='layout-container'>

            <SideBar />
            <div className='children-container'>
                {children}
            </div>
        </main>
    )
}
