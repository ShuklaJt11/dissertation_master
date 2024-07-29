import React from 'react';
import Box from '@mui/material/Box';

import { imageLocation } from '../../services/utils';

const MainImage = ({imageUrl, imageData}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
        <div style={{
            padding: "20px"
        }}>
            <img src={`${imageLocation}${imageUrl}`} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
        </div>
        
    </Box>
  );
};

export default MainImage;
