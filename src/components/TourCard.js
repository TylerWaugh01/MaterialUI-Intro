import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { CatchingPokemon } from "@mui/icons-material"
import Rating from '@mui/material/Rating'


const TourCard = () => {
    return (
    <Grid item xs={3}> 
        <Paper elevation={3}>
            <img 
            src="http://placekitten.com/500/100" 
            alt="destination" 
            className="img"
            />
            <Box paddingX={1}>
                <Typography variant='subtitle1' component='h2'>
                    Immerse Into The Falls
                </Typography>
                <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <CatchingPokemon sx={{width: 12.5}}/>
                <Typography variant='body2' compoment='p' marginLeft={0.5}>
                    5 hours
                </Typography>
            </Box>
            <Box
                marginTop={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <Rating name="read-only" 
                        value={4.5} 
                        precision={0.5} 
                        size='small' 
                        readOnly 
                />
                <Typography variant='body2' compoment='p' marginLeft={0.5}>
                    4.5
                </Typography>
                <Typography variant='body3' compoment='p' marginLeft={1.5}>
                    (655 reviews)
                </Typography>
            </Box>
            <Box>
                <Typography variant='h6' compoment='h3' marginTop={0}>
                        From C $147
                    </Typography>
            </Box>



            </Box>   
        </Paper>
    </Grid>  
    );
};

export default TourCard; 

