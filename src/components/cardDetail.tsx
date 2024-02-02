import * as React from 'react';
import '../routes/projects/projects.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chip from '@mui/material/Chip';
import { Stack } from '@mui/material';

export interface SimpleDialogProps {
  title: string;
  description: string;
  detailedDescription:string | undefined
  contribution: string | undefined
  tags: string[]
}

function DetailCard(props: SimpleDialogProps) {

  return (
    <Container maxWidth="lg">
    <Box sx={{ 
        height: '100vh',
        textAlign: 'left' }}>
        <div className="cardDetailTitle"> {props.title}</div>
        <Stack direction="row" spacing={1}>
            {props.tags.map((tag) => 
             <Chip 
             label={tag}
             sx={{
                fontWeight: 'bold',
                color: '#1A7789',
                fontFamily: 'Noto Sans'
             }} />
            )}
        </Stack>
        <div className="cardSubDetail"> {props.description}</div>
        <div> {props.detailedDescription}</div>
        <div className="cardDetailSubTitle"> Contribution and Implementation </div>
        <div> {props.contribution}</div>

    </Box>
  </Container>
  );
}

export default DetailCard
