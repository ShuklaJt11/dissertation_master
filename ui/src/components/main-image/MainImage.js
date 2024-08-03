import React from 'react';
import { Box, Grid } from '@mui/material';

import { imageLocation } from '../../services/utils';
import ImageInfo from '../image-info/ImageInfo';

const MainImage = ({imageUrl, imageData, attackedImageUrl}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 48px)" flexDirection="column">
      {imageData.attackedTable ?
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid display="flex" justifyContent="center" alignItems="center" item xs={6} sx={{padding: '10px'}}>
            <div style={{
              padding: "20px"
            }}>
              <img src={`${imageLocation}${imageUrl}`} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
            </div>
          </Grid>
          <Grid display="flex" justifyContent="center" alignItems="center" item xs={6} sx={{padding: '10px'}}>
            <div style={{
              padding: "20px"
            }}>
              <img src={attackedImageUrl} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
            </div>
          </Grid>
        </Grid> :
        <div style={{
          padding: "20px"
        }}>
          <img src={`${imageLocation}${imageUrl}`} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
        </div>
      }
      <ImageInfo imageData={imageData} />
    </Box>
  );
};

export default MainImage;
