import React from 'react';
import logo from '../assets/logo2.png';
import { useEffect, useState } from 'react';
import { ButtonGroup,Button,Box, Grid, Avatar } from '@mui/material';
import {FaHistory} from 'react-icons/fa';
import { MdComment,MdLockOutline} from 'react-icons/md';
import {BiVideo} from 'react-icons/bi';


function Header() {
    const [title,setTitle]=useState('Untitled document');
  useEffect(() => {
      document.title = title;
  }, [title]);
  const handleTitle = (e)=>{
    setTitle(e.target.value)
  }
  return (
            <Grid container spacing={2} padding={1} className='header' >
                <Grid item xs={0.5}>
                    <Box>
                         <img src={logo} height={'42'}  />
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box> <input style={{border:0, fontSize:20,color:'grey'}}  type='text' onChange={handleTitle} defaultValue={title} /></Box>
                </Grid>
                <Grid item xs={2} marginLeft={20} marginRight={'auto'} minWidth={'25%'} >
                    <Box paddingTop={1.5} className='svgs' display={'flex'}  marginRight={'auto'}>
                        <FaHistory size={'22'}  style={{paddingRight:30}}  />
                        <MdComment size={'22'} style={{paddingRight:30}} />
                        <BiVideo size={'22'} style={{paddingRight:30}} />
                        <Button><MdLockOutline  /> Share</Button>
                        <Avatar>K</Avatar>
                
                    </Box>
                </Grid>
                <Grid item xs={8} marginLeft={6} marginTop={-5}>
                    <Box>
                        <ButtonGroup style={{font:"san-sarif"}} size="medium">
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">File</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">Edit</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">View</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">Format</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">Tools</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">Extensions</Button>
                            <Button style={{color:'#202124', textTransform:'none'}} variant="text">Help</Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid>
   
  )
}

export default Header