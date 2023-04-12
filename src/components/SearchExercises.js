import { Stack, Typography, Box, TextField, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { fetchData,exerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])
  
  useEffect(() => {
    const fetchExercisesData =async()=>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

      setBodyParts(['all',...bodyPartsData]);
    }
    fetchExercisesData();
  }, [])
  

  const handleSearch = async()=>{
    if(search){
      const exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchExercises = exerciseData.filter(
        (exercise)=> exercise.name.toLocaleLowerCase().includes(search) || exercise.target.toLocaleLowerCase().includes(search) || exercise.equipment.toLocaleLowerCase().includes(search) || exercise.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchExercises)
    } 
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={800} sx={{ fontSize: { lg: '44px', xs: '30px' },fontFamily:'Arima Madurai'}} mb="50px" textAlign="center">
        Awesome Exercises You <br />Should Know
      </Typography>
      <Box position="relative" mb="72px" >
        <TextField sx={{
          input: { fontWeight: '500', 
          fontSize:'20px',
          margin:'-3px 0',
          border: 'none',
          borderRadius: '4px' },
          width:{lg:'1000px',xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px',
        }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder='Search Exercises'
          type="text" />
          <Button className='search-btn' sx={{
            bgcolor:'#FF2625',
            color:'#fff',
            textTransform:'none',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:'absolute',
            right:'0'
          }} onClick={handleSearch}>
            Search
          </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%',p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercises