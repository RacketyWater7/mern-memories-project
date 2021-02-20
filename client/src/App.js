import React, { useEffect, useState } from "react";
// Dispatch
import { useDispatch } from "react-redux";
// Action
import { getPosts } from "./actions/posts";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
// Images
import memories from "./images/memories.png";
// Components
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// Styles
import useStyles from "./styles";
const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography varian="h2" align="center" className={classes.heading}>
          Memories
        </Typography>
        <img
          src={memories}
          alt="memories"
          className={classes.image}
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
            className={classes.mainContainer}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
