import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

import CorgiPhoto from '../corgi.jpeg';

function AnimalCard(props){
    return (
        <Card sx={{
            maxWidth: 300,
            padding: 3
        }} elevation={2}>
            <img style={{
                width: "100%"
            }}
            src={CorgiPhoto}/>
            <Typography variant='h6'>
                {props.name}
            </Typography>
            <Typography variant='body'>
                {props.description}
            </Typography>
            <br/>
            <Link to={"/animal/"+props.name}>
                <Button variant='contained'>
                    Adopt
                </Button>
            </Link>

        </Card>
    )
}

export default AnimalCard;