import React from 'react'
import { Box, Stack,Center } from '@chakra-ui/react';
import { Divider,Modal } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const OutlookLogo = () => {
  return (
    <Stack alignItems={'center'} >
        <Box><img src='https://secure-ds.serving-sys.com/resources/PROD/asset/1073745701/IMAGE/20220610/outlook_GBD-200_1280x250_71496722076948205.jpg'/></Box>
        
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