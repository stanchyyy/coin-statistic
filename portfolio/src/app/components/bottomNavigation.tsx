'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import { inherits } from 'util';
import { red } from '@mui/material/colors';



export default function SimpleBottomNavigation() {
const theme = useTheme();
  const [value, setValue] = React.useState(0);

  return (
    <Container maxWidth={false}
    sx={{
      position: 'fixed', 
      bottom: 0, 
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}>
      <BottomNavigation  
      sx={{
        marginTop:"50px",
          width: '100%',
          maxWidth: '50%',
        //   backgroundColor: theme.palette.mode =='light'? theme.palette.primary.main : "darkBlack",
        //   '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
        // color: theme => theme.palette.secondary.main
              bgcolor: 'background.default'
          // }         
        }}
        
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction  label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction  label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction  label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Container>
  );
}