import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo-3.png';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm:'122px', xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}} px="20px">
      <Link to="/">
      <img src={Logo} alt="logo" style={{width:'48px', height:'38px',marging:'0 20px'}}/>
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end" >
        <Link to="/" style={{textDecoration:'none',color:'#3A1212',borderBottom:'3px solid #FF2625',marginBottom:'10px',fontFamily:'Arima Madurai',fontWeight:"bolder"}}>Home</Link>
        <a href="#exercises" style={{textDecoration:'none',color:'#3A1212',marginBottom:'10px',fontFamily:'Arima Madurai',fontWeight:"bold"}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar