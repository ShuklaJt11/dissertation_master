import React from 'react';
import { Button } from '@mui/material';

const GeneralButton = ({ label, action=() => {return} }) => {
  return (
    <Button color='secondary' variant="contained" aria-label="New Image" onClick={action} sx={{margin: '10px'}}>
        {label}
    </Button>
  );
};

export default GeneralButton;