import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';

import MainImage from '../main-image/MainImage';
import LoadingAnimation from '../loader/LoadingAnimation';
import AttackArea from '../attack-area/AttackArea';
import IntroModal from '../intro-modal/IntroModal';

import { fetchImageApi, fetchImageByLevelApi } from '../../services/utils';

const GameScreen = () => {
    const [loading, setLoading] = useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const [attackedImageUrl, setAttackedImageUrl] = useState('');
    const [imageData, setImageData] = useState('');
    const [openModal, setOpenModal] = useState(true);

    const handleOpen = () => setOpenModal(true);
    
    const handleClose = () => setOpenModal(false);

    const loadNewImage = () => {
        fetch(fetchImageApi, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setImageUrl(data.image_url);
            setImageData({
                originalTable: data.originalTable
            });
            handleClose();
            setLoading(false);
        });
    };

    const loadNewImageByLevel = level => {
        fetch(fetchImageByLevelApi, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "level": level
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setImageUrl(data.image_url);
            setImageData({
                originalTable: data.originalTable
            });
            handleClose();
            setLoading(false);
        });
    };

    const selectLevel = level => level > 3 ? loadNewImage() : loadNewImageByLevel(level);
    
    const reset = () => {
        setLoading(true);
        setImageUrl('');
        setAttackedImageUrl('');
        setImageData('');
        handleOpen();
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={7} sx={{marginLeft: '80px'}}>
                {loading ?
                    <LoadingAnimation /> :
                    <MainImage imageUrl={imageUrl} imageData={imageData} attackedImageUrl={attackedImageUrl} reset={reset} />
                }
                </Grid>
                <Grid item xs={4}>
                    <AttackArea setImageData={setImageData} setLoading={setLoading} imageUrl={imageUrl} setAttackedImageUrl={setAttackedImageUrl} />
                </Grid>
            </Grid>
            <IntroModal open={openModal} selectLevel={selectLevel} />
        </Box>
    );
};

export default GameScreen;