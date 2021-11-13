import { Grid, Typography, Button } from "@material-ui/core";
const Welcome = (props) => {
  return (
    // <Home />
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Welcome to Job Portal</Typography>
        
      </Grid>
      
      
      <Button variant="contained" color="primary" href="/home">See Jobs</Button>

      {/* <button>See Jobs</button> */}
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Welcome to Job Portal</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
