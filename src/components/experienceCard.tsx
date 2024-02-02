import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

interface experienceProps {
    name: string
    location: string
    year: string
    degree: string
    concentration: string
}

export default function ExperienceCard(props: experienceProps) {
  return (
    <Card 
    sx={{ 
        minWidth: 275 ,
        maxWidth:  400,
        backgroundColor: 'var(--tara-photo-blue)'
        }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="div">
        {props.degree}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
          <Chip 
             label={props.year}
             sx={{
                fontWeight: 'bold',
                color: '#1A7789',
                fontFamily: 'Noto Sans'
             }} />
        </Typography>
        <Typography variant="body2">
        {props.concentration}
        </Typography>
      </CardContent>
    </Card>
  );
}