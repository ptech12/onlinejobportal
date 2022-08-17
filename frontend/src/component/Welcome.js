import { Grid, Typography, Button } from "@material-ui/core";
import isAuth, { userType } from "../lib/isAuth";

const Welcome = (props) => {
  if(isAuth()){
    if(userType() === "recruiter")
    {
      return (
        <Grid 
        container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{ padding: "30px", minHeight: "93vh" }}>
        <Grid item>
          <Typography variant="h2">Welcome to Job Portal</Typography>
        </Grid>
        <Button variant="contained" color="primary" href="/home">Add Jobs</Button>
        </Grid>
      );
    }else{
       return (
        <Grid container
        item
        direction="column"
        alignItems="center"
        justify="center"
        style={{ padding: "30px", minHeight: "93vh" }}>
          <Grid item>
            <Typography variant="h2">Welcome to Job Portal</Typography>
          </Grid>
          <Button variant="contained" color="primary" href="/home">See Jobs</Button>
          </Grid>
       );
      
    }
  }else{
    return (
      <>
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center" spacing={2} >
        <Grid item xs={8}>
          <Typography variant="h2">Welcome to Job Portal</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography variant="h5">Login/Signup to see jobs available</Typography>
        </Grid>
        <Grid item xs={4}>
            <Button variant="contained" color="primary" href="/login">Login</Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="primary" href="/signup">Sign up</Button>
          </Grid>
      </Grid>
        </>
    );
  }
  
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
