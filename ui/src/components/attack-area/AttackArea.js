import React from 'react';
import { Box } from '@mui/material';

import AttackButton from '../attack-button/AttackButton';

import { attackImageApi } from '../../services/utils';

const AttackArea = ({setImageData, setLoading, imageUrl}) => {

    const randomNoiseAttack = () => {
        setLoading(true)
        fetch(attackImageApi, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({'image': imageUrl})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setImageData(data)
            setLoading(false)
        })
        .catch(() => {
            setLoading(false)
        });
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <AttackButton attackHeading="Random Noise Attack" attackDescription="Adds 10% noise to the image." action={randomNoiseAttack} />
        </Box>
    );
};

export default AttackArea;