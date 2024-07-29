import React from 'react';
import { Box } from '@mui/material';

import AttackButton from '../attack-button/AttackButton';

const AttackArea = () => {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <AttackButton attackHeading="Random Noise Attack" attackDescription="Adds 10% noise to the image." />
        </Box>
    );
};

export default AttackArea;