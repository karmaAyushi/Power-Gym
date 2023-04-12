import { Stack, Typography } from '@mui/material'
import React from 'react'

import Icon from '../assets/icons/gym2.png'

const BodyParts = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop: bodyPart===item?'4px solid #ff2625':'', 
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '240px',
                cursor: 'pointer', gap: '47px'
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:'smooth'})
            }}
            >
            <img src={Icon} alt="dumbbell" style={{ widh: '40px', height: '40px' }} />
            <Typography  fontSize="20px" fontWeight="bold" color="#3A1212" textTransform="capitalize" mt={-2} fontFamily='Arima Madurai'>{item}</Typography>
        </Stack>
    )
}

export default BodyParts