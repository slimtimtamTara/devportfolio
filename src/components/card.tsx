import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


interface cardProps {
    title: string
    description: string
    tags: string[]
    mainTag: string
}
function chooseColor(input: string){
    if (input === 'ui'){
        return 'var(--tara-light-blue)'
    } else if (input === 'design') {
        return 'var(--tara-azure)'
    } else {
        return 'var(--tara-photo-blue)'
    }
}
const MediaCard = (props: cardProps) => {
  return (
    <Card sx={{ 
        maxWidth: 345,
        width: '30%',
        backgroundColor: chooseColor(props.mainTag),
        margin: 1
         }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography 
        gutterBottom 
        variant="h5" 
        component="div"
        sx={{
            fontFamily: 'Noto Sans',
            fontWeight: 'bold',
            fontSize: '30px',
            color: '#0e414b'
        }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
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
        <Button size="small">
            View
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard