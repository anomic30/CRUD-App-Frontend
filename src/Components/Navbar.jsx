import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import icon from '../Assets/Images/icon.png';

const useStyle = makeStyles({
    header: {
        background: '#192734'
    },
    tabs: {
        color: "#d5d7e0",
        textDecoration: "none",
        marginRight: 20,
        marginLeft: 20,
        fontSize: '20px',
        textTransform: 'uppercase',
        display: 'block',
        '&:hover': {
            color: "#FFFFFF",
        },
    }
})

const Navbar = () => {
    const classes = useStyle();
    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <img src={icon} alt="icon" height="32px" width="32px" />
                <div className={classes.tabs}>User Management System</div>
                <NavLink className={classes.tabs} to="/" exact>Show users</NavLink>
                <NavLink className={classes.tabs} to="add" exact>Add user</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
