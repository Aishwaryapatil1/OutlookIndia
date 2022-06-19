import React from 'react'
import { Box, Stack,Center } from '@chakra-ui/react';
import { Divider,Modal } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const OutlookLogo = () => {
  return (
    <Stack alignItems={'center'} >
        <Box><img src='https://tpc.googlesyndication.com/simgad/8005019016951996168'/></Box>
        
    <Box  ><img src='https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg' /></Box>
    <Box display={"flex"} gap={"10px"} color={"#4f4d4d"} fontSize={"13px"}>
        {/* <Box><NavLink to="/login">LOGIN</NavLink></Box> */}
        <a  data-bs-toggle="modal" href="#exampleModalToggle" role="button" >Login</a>
       
        <Center height='15px' bg={"red"} marginTop={"7px"} >
  <Divider orientation='vertical' />
</Center>

        <Box><NavLink to="/login">SUBSCRIBE</NavLink></Box>
    </Box>
    </Stack>
  )
}

export default OutlookLogo