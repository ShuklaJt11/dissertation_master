import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import MainImage from '../main-image/MainImage';
import LoadingAnimation from '../loader/LoadingAnimation';
import AttackArea from '../attack-area/AttackArea';

import { fetchImageApi } from '../../services/utils';

const GameScreen = () => {
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState('')
    const [imageData, setImageData] = useState('')

    useEffect(() => {
        fetch(fetchImageApi, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setImageUrl(data.image_url)
            setImageData({
                originalTable: data.originalTable
            })
            setLoading(false)
        });
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
        {
            loading ?
            <LoadingAnimation /> :
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={7} sx={{margin: "15px"}}>
                    <MainImage imageUrl={imageUrl} imageData={imageData} />
                </Grid>
                <Grid item xs={4}>
                    <AttackArea setImageData={setImageData} setLoading={setLoading} />
                </Grid>
            </Grid>
        }
        </Box>
    );
};

export default GameScreen;