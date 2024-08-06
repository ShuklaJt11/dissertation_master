import React from 'react';
import { Box, Modal, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

import GeneralButton from '../general-button/GeneralButton';

import { difficultyList } from '../../services/utils';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalArea = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
}));

const IntroModal = ({open, selectLevel}) => {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalArea>
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textAlign: 'center',
                        width: '100%'
                    }} >
                        BEAT THE AI
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Select Difficulty:
                    </Typography>
                    {difficultyList.map((level, idx) => <GeneralButton label={level} action={() => selectLevel(idx)} />)}
                </Box>
            </ModalArea>
        </Modal>
  );
};

export default IntroModal;