import React from 'react'
import './template.css'
import { IoMdSpeedometer } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5"
import { CgEreader } from "react-icons/cg";

import logoImage from '../../assets/images/login.jpg'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function SideBar() {
    const location = useLocation();

    return (
        <div className='sidebar grid'>
            <div className='logoDiv flex'>
                <img src={logoImage} alt="StudyPadi Logo" className='logoImage' />
                <h2 className='title'>StudyPadi</h2>
            </div>

            {/* MENU DIV */}
            <div style={{ marginTop: '30px' }}>
                <h3 style={{ marginLeft: '20px', color: 'white' }}>Quick Menu</h3>

                <ul className='menuLists grid'>
                    <li className="listItem">
                        <Link to='/home' className={`${location.pathname === '/home' ? "menuLink-active flex" : 'menuLink flex'}`}>
                            <IoHomeOutline className='icon' />
                            <span className='smallText'>Home</span>
                        </Link>

                    </li>
                    <li className="listItem">
                        <Link to='/test' className={`${location.pathname === '/test' ? "menuLink-active flex" : 'menuLink flex'}`}>
                            <IoMdSpeedometer className='icon' />
                            <span className='smallText'>Test</span>
                        </Link>
                    </li>
                    <li className="listItem">
                        <Link to='/tutorial' className={`${location.pathname === '/tutorial' ? "menuLink-active flex" : 'menuLink flex'}`}>
                            <CgEreader className='icon' />
                            <span className='smallText'>Tutorial</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* BOTTOM LOGIN */}
        </div>
    )
}
