import { useState, useEffect } from "react";
// Dispatch
import { useDispatch } from "react-redux";
// Action
import { getPosts } from "../actions/posts";
// Components
import Posts from "../components/Posts/Posts";
import Form from "../components/Form/Form";
// Material UI
import { Container, Grow, Grid } from "@material-ui/core";
// Styles
import useStyles from "../styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const classes = useStyles();
  return (
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
  );
};

export default Home;
