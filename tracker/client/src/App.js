import React , {useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'

import {getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
// import { Routes, Route } from "react-router-dom";
import pixel from './images/pixel.jpg'
import useStyles from './styles'

const App = () => {
  const classes = useStyles();
  //Error
  const dispatch = useDispatch();
  //Error

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  return (
      <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography  className={classes.heading} variant="h2" align="center">Travels</Typography>
        <img className={classes.image} src={pixel} alt="memories" height='60'/> 

      </AppBar>
      <Grow in>
        <Container >
          <Grid container justify="space-between" alignItems="stretch" spacing={4}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      </Container>
  );
};

export default App;
