import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-3.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#f7d7dc" width="100%">
      <Stack gap="40px" alignItems='center'  pt="14px" flexDirection="row" justifyContent="center" pb="10px">
        <img src={Logo} alt="logo" width="50px" height="40px"/>
        <Typography fontWeight={800} color="#6d0200" fontSize="22px" fontFamily='Marmelad'>
          Power Gym
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="center">
      <Typography variant='h6' fontFamily='Arima Madurai'>
        Made with ❤️ by Kelen
      </Typography>
      </Stack>
    </Box>
  )
}

export default Footer