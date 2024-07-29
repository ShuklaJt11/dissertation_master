import React from 'react';
import Box from '@mui/material/Box';

import { imageLocation } from '../../services/utils';
import ImageInfo from '../image-info/ImageInfo';

const MainImage = ({imageUrl, imageData}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 48px)" flexDirection="column">
        <div style={{
            padding: "20px"
        }}>
            <img src={`${imageLocation}${imageUrl}`} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
        </div>
        <ImageInfo imageData={imageData} />
    </Box>
  );
};

export default MainImage;
