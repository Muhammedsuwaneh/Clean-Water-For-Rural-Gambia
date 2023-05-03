import React from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';
import image from "../../assets/rural-water-supply.png";

const useStyles = styled((theme) => ({
  heroContainer: {
    background: "red",
    backgroundSize: 'cover',
    height: '1000vh',
    with: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: '4rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  button: {
    padding: theme.spacing(2, 4),
    fontSize: '1.2rem',
    borderRadius: '50px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: theme.spacing(1.5, 3),
    },
  },
}));

function HeroSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.heroContainer} padding="1rem">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Typography variant="h1" sx={{ fontSize: { lg: "4rem", sm: "1.2rem", md: "1.2rem", xs: "1.2rem"}, margin: "1rem 0"}} className={classes.heading}>
          <span color="#1976D2">Help us</span> bring clean water to the citizens of <br />
          rural Gambia
        </Typography>
        <Typography variant="subtitle1" className={classes.subheading} margin="1rem 0">
            Every cent matters
        </Typography>
        <Button variant="contained" color="primary" className={classes.button} component={NavLink} to="/">
           Donate now
        </Button>
      </Grid>
    </Grid>
  );
}

export default HeroSection;
