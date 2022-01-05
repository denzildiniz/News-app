import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './style'

const Navrbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const menuHandler = ()=>{
        setMenuToggle(!menuToggle);
    }

    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={classes.nav__box}>
                    <Typography variant="h6">
                        3D-News
                    </Typography>
                    {
                        menuToggle ?
                         (<CloseIcon className={classes.nav__menu} onClick={menuHandler} />)
                          : 
                        (<MenuIcon className={classes.nav__menu} onClick={menuHandler} />)
                    }
                    <ul className={menuToggle ? classes.nav__lists__active : classes.nav__lists }>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>general</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>business</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>entertainment</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>health</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>science</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>sports</a></li>
                        <li className={classes.nav__items}><a href='/' className={classes.nav__links}>technology</a></li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navrbar
