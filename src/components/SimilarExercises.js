import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '80px', xs: '0' } }}>
      <Typography variant='h3' mb="25px" fontFamily='Arima Madurai'>
        Exercise that target same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }} >
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h3' mb="25px" mt="100px" fontFamily='Arima Madurai'>
        Exercise that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises