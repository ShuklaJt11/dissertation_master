import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { imageLocation } from '../../services/utils';

const MainImage = ({imageUrl, imageData}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
        <div style={{
            padding: "20px"
        }}>
            <img src={`${imageLocation}${imageUrl}`} alt="Something should be here" style={{maxWidth: '400px', maxHeight: '400px'}} />
        </div>
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Category</TableCell>
                            <TableCell align="right">AI Confidence</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {imageData.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{(row.probability * 100).toFixed(3)} %</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </Box>
  );
};

export default MainImage;
