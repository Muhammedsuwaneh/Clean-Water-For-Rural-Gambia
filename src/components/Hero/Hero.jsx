import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid } from '@mui/material';
import { styled } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';
import image1 from "../../assets/image1.jpg";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpeg";

const images = [image1, image2, image3, image4, image5];

const HeroContainer = styled(Grid)(() => ({
    height: '80vh',
    display: 'flex',
    width: "100%",
    margin: "0",
    color: '#fff',
}));

const Heading = styled(Typography)((theme) => ({
    fontWeight: 'bold',
    fontSize: '4rem',
}));

const Subheading = styled(Typography)((theme) => ({
    fontSize: '1.5rem',
}));

const ButtonContainer = styled(Button)((theme) => ({
    borderRadius: '50px',
}));

function HeroSection() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [imageSelector, setImageSelector] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(imageSelector === images.length-1 || imageSelector > images.length-1)
        setImageSelector(0);
      else
        setImageSelector(prev => prev+1);

      const image = images[imageSelector]
      
      setBackgroundImage(image);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageSelector]);

  return (
    <HeroContainer container sx={{ background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})
    no-repeat center center/cover`, padding: { lg: "5rem", sm: "1rem", md: "1rem", xs: "1rem"}, textAlign: { sm: "center", md: "center", xs: "center", lg: "left"},
    justifyContent: { lg: "left", sm: "center", md: "center", xs: "center"}, alignItems: { lg: "left", sm: "center", md: "center", xs: "center"}}}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Heading variant="h1" sx={{ fontSize: { lg: "4rem", sm: "1.2rem", md: "1.2rem", xs: "1.2rem"}, margin: "1rem 0"}}>
            <span color="#1976D2">Help us</span> bring clean water to the citizens of rural Gambia
          </Heading>
          <Typography margin="1rem .4rem" fontSize="1.3rem">
              Every cent matters
          </Typography>
          <ButtonContainer variant="contained" color="primary" component={NavLink} to="/donate">
            Donate now
          </ButtonContainer>
      </Grid>
    </HeroContainer>
  );
}

export default HeroSection;
