import React from 'react';
import { Grid } from '@mui/material';

import ImageInfoTable from '../../image-info-table/ImageInfoTable';

const ImageInfo = ({imageData}) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {imageData.attackedTable ?
        <>
            <Grid item xs={6}>
                Original Image:
                <ImageInfoTable tableData={imageData.originalTable} />
            </Grid>
            <Grid item xs={6}>
                Attacked Image:
                <ImageInfoTable tableData={imageData.attackedTable} />
            </Grid>
        </> : 
        <Grid item xs={6}>
            <ImageInfoTable tableData={imageData.originalTable} />
        </Grid>
        }
    </Grid>
  );
};

export default ImageInfo;