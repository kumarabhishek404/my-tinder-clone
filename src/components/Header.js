import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PermPhoneMsgIcon from '@material-ui/icons/PermPhoneMsg';
import Forum from '@material-ui/icons/Forum';
import AddProfile from './AddProfile'

import { Link } from 'react-router-dom';
import './Header.css';

function Header() {

    const [userDetails, setUserDetails] = useState({})

    // const profile = () => {
    //     setUserDetails(profile)
    // }
    console.log(userDetails.familyName);

    return (
        <div className='header'>
            <div className='header_profile'>
                <AddProfile className='header_icon' profile={setUserDetails} />
                <h2>HI, <span>{userDetails.name}</span> </h2>
            </div>
            <div className='header_logo'>
                <h2>TT</h2>
                <PermPhoneMsgIcon style={{ fontSize: 50 }} />
            </div>
            {/* <img
            className='header_logo'
            src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png'
            alt='tinder_logo' /> */}

            <IconButton className='header_icon'>
                <Forum fontSize='large' className='header_icon' />
            </IconButton>
        </div>
    )
}
export default Header
