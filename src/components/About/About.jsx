import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HelpIcon from "@mui/icons-material/Help";

const useStyles = styled((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  icon: {
    fontSize: 80,
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

function AboutSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id="about"
    sx={{  alignItems: "center", justifyContent: "center",margin: "3rem 0", padding: { sm:"1.2rem",md:"1.2rem",xs:"1.2rem",lg:"3rem"}}}>
      <Grid item xs={12} md={8}>
        <Typography variant="h3" align="center" className={classes.title} margin="1rem 0">
          About
        </Typography>
        <Grid container spacing={6} justify="center" marginTop="2rem">
          <Grid item xs={6} md={3} align="center">
            <LocalDrinkIcon className={classes.icon} sx={{ fontSize: "5rem", color: "#0674E2"}}/>
            <Typography variant="h5" className={classes.subtitle} margin="1rem 0">
              Clean Water
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We help people living in rural Gambia get access to clean water.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} align="center">
            <MonetizationOnIcon className={classes.icon} sx={{ fontSize: "5rem", color: "#A4D6FF"}}/>
            <Typography variant="h5" className={classes.subtitle} margin="1rem 0">
              Fundraising
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We raise funds to support our clean water projects.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} align="center">
            <GroupIcon className={classes.icon} sx={{ fontSize: "5rem", color: "#00398C"}}/>
            <Typography variant="h5" className={classes.subtitle} margin="1rem 0">
              Community Engagement
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We work with local communities to identify needs and priorities.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3} align="center">
            <ShowChartIcon className={classes.icon} sx={{ fontSize: "5rem", color: "#353535"}}/>
            <Typography variant="h5" className={classes.subtitle} margin="1rem 0">
              Sustainable Development
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We implement solutions that are environmentally and socially sustainable.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <HelpIcon className={classes.icon} sx={{ fontSize: "5rem", color: "#6BB6FF"}}/>
            <Typography variant="h5" className={classes.subtitle} margin="1rem 0">
              Our Commitments
            </Typography>
            <Typography variant="body1" className={classes.text}>
              We are committed to community empowerment, transparency, and accountability.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AboutSection;
