import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import GroupIcon from "@mui/icons-material/Group";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import HelpIcon from "@mui/icons-material/Help";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Container = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(1),
}));

const Text = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

function AboutSection() {

  return (
    <Container container  id="about"
    sx={{  alignItems: "center", justifyContent: "center",margin: "1rem 0", padding: { sm:"1.2rem",md:"1.2rem",xs:"1.2rem",lg:"5rem"}}}>
      <Grid item xs={12} md={8}>
        <AnimationOnScroll animateIn="animate__bounceIn">
          <Divider sx={{ padding: "1rem", textTransform: "uppercase", fontSize: "1.2rem"}}>
              <Chip label="What We Do" />
          </Divider>
         </AnimationOnScroll>
         <AnimationOnScroll animateIn="animate__bounceIn">
            <Text variant="body1" textAlign="center" margin="2rem 0">
                The Salikenni Scholarship Fund is a 501(c)(3) non-profit organization dedicated to increasing 
                opportunity for education in one cluster of villages in the rural area of The Gambia in West Africa
            </Text>
         </AnimationOnScroll>
        <Grid container spacing={6} justify="center" marginTop="2rem">
          <Grid item xs={12} md={3} align="center">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <LocalDrinkIcon sx={{ fontSize: "5rem", color: "#0674E2"}}/>
              <Subtitle variant="h5" margin="1rem 0">
                Clean Water
              </Subtitle>
              <Text variant="body1">
                We help people living in rural Gambia get access to clean water.
              </Text>
            </AnimationOnScroll>
          </Grid>
          <Grid item xs={12} md={3} align="center">
              <AnimationOnScroll animateIn="animate__bounceIn">
              <MonetizationOnIcon sx={{ fontSize: "5rem", color: "#A4D6FF"}}/>
              <Subtitle variant="h5" margin="1rem 0">
                Fundraising
              </Subtitle>
              <Text variant="body1">
               We raise funds to support our clean water projects.
              </Text>
              </AnimationOnScroll>
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <GroupIcon sx={{ fontSize: "5rem", color: "#00398C"}}/>
              <Subtitle variant="h5" margin="1rem 0">
                Community Engagement
              </Subtitle>
              <Text variant="body1">
                We work with local communities to identify needs and priorities.
              </Text>
            </AnimationOnScroll>
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <ShowChartIcon sx={{ fontSize: "5rem", color: "#353535"}}/>
              <Subtitle variant="h5" margin="1rem 0">
                Sustainable Development
              </Subtitle>
              <Text variant="body1">
                We implement solutions that are environmentally and socially sustainable.
              </Text>
            </AnimationOnScroll>
          </Grid>
          <Grid item xs={12} align="center">
            <AnimationOnScroll animateIn="animate__bounceIn">
              <HelpIcon sx={{ fontSize: "5rem", color: "#6BB6FF"}}/>
              <Subtitle variant="h5" margin="1rem 0">
                Our Commitments
              </Subtitle>
              <Text variant="body1">
                We are committed to community empowerment, transparency, and accountability.
              </Text>
            </AnimationOnScroll>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AboutSection;
