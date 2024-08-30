import React from 'react';
import './Homepage.css';
import { AppBar, Toolbar, Typography, Tabs, Tab, Card, CardMedia, CardContent, CardActions, Button, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const movies = [
  { title: 'Jaya Janaki Nayaka', rating: 8.9, genre: 'Action', image: './jaya janaki nayaka.jpeg', id: 'XIX' },
  { title: 'Aakasamantha', rating: 7.1, genre: 'Love, Drama', image: './aakasamantha.jpeg', id: 'XXI' },
  { title: 'Drusyam', rating: 8.2, genre: 'Fiction', image: './Drusyam.jpeg', id: 'XII' },
  { title: 'Mr.perfect', rating: 7.5, genre: 'Comedy', image: './mrperfect.jpeg', id: 'XIV' }
];

const Homepage = () => {
  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <h3>Rajahmundry</h3>
          </Typography>
        </Toolbar>
        <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
          <Tab label="All Movies" />
          <Tab label="For Kids" />
          <Tab label="My Tickets" />
        </Tabs>
      </AppBar>
      
      <div className="latest-arrivals">
        <Typography variant="h5" className="section-title">
          <h2>Latest Arrivals</h2>
        </Typography>
        <div className="featured-movie">
          <Card>
            <CardMedia
              image="./aa.jpeg"
              title="Aakasamanthaa"
              className="featured-image"
            >
              <PlayArrowIcon className="play-icon"/>
            </CardMedia>
          </Card>
        </div>
      </div>
      
      <div className="movie-categories">
        <Button variant="contained" color="primary">ALL</Button>
        <Button variant="contained">Action</Button>
        <Button variant="contained">Fiction</Button>
        <Button variant="contained">Thriller</Button>
        <Button variant="contained">Fantasy</Button>
      </div>

      <Grid container spacing={3} className="now-showing">
        {movies.map((movie) => (
          <Grid item xs={12} sm={6} md={3} key={movie.id}>
            <Card>
              <CardMedia
                image={movie.image}
                title={movie.title}
                className="movie-image"
              />
              <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
                <Typography variant="subtitle1">Rating: {movie.rating}</Typography>
                <Typography variant="subtitle2">{movie.genre}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="large" color="secondary">Book Now</Button> */}
                {/* <button type="button" class="btn btn-primary">Book now</button>   */}
                {/* <button type="button" class="btn btn-outline-secondary">Book Now</button>  */}
                <Button variant="contained" color="primary">Book now</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Homepage;