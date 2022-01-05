import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from "react-router-dom"; 

import './style.css';

const Navrbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const menuHandler = ()=>{
        setMenuToggle(!menuToggle);
    }

    return (
        <div>
            <AppBar stickyheader={"true"} >
                <Toolbar className='nav__box'>
                    <Typography variant="h6">
                        3D-News
                    </Typography>
                    {
                        menuToggle ?
                         (<CloseIcon className='nav__menu' onClick={menuHandler} />)
                          : 
                        (<MenuIcon className='nav__menu' onClick={menuHandler} />)
                    }
                    <ul className={menuToggle ? 'nav__lists nav__lists--active' : 'nav__lists' }>
                        <li className='nav__items'><Link to='/general' className='nav__links'>Home</Link></li>
                        <li className='nav__items'><Link to='/business' className='nav__links'>Business</Link></li>
                        <li className='nav__items'><Link to='/entertainment' className='nav__links'>Entertainment</Link></li>
                        <li className='nav__items'><Link to='/health' className='nav__links'>Health</Link></li>
                        <li className='nav__items'><Link to='/science' className='nav__links'>Science</Link></li>
                        <li className='nav__items'><Link to='/sports' className='nav__links'>Sports</Link></li>
                        <li className='nav__items'><Link to='/technology' className='nav__links'>Technology</Link></li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navrbar

