import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({exerciseVideos,name}) => {
  console.log(exerciseVideos);

  if(!exerciseVideos.length) return 'Loading....'
  return (
    <Box sx={{mt:{lg:'100px',xs:'20px'}}} p='20px'>
      <Typography variant='h3' mb='33px' fontFamily='Arima Madurai'>
        Videos to watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise
      </Typography>
      <Stack justifyContent='flex-start' flexWrap="wrap" alignItems="center"sx={{
        flexDirection:{lg:'row'},
        gap:{lg:'100px', xs:'0'}
      }}>
        {exerciseVideos?.slice(0,3).map((item,index)=>(
          <a 
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              <Typography variant='h5'fontWeight={500} color="#000000" fontFamily='David Libre'>
                {item.video.title}
              </Typography>
              <Stack flexDirection="row" gap="2px">
              <img src='https://thumbs.dreamstime.com/b/web-189206689.jpg' alt='YT' width="20px" height="25px"/>
              <Typography  color="#AAAAAA">
                {item.video.channelName}
              </Typography>
              </Stack>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos