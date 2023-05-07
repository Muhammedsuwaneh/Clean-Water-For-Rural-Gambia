import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterStyled = styled(Grid)(() => ({
    backgroundColor: '#272822',
    color: 'white',
    padding: "3rem",
}));

function Footer() {
  return (
    <FooterStyled container sx={{ display: "flex", justifyContent: "space-around", textAlign: { sm: "center", md: "center", xs: "center", lg: "left"}}}>
      <Grid item margin="1rem 0">
        <Typography variant="h6">Clean Water for Rural Gambia</Typography>
        <Typography variant="body2" margin="1rem 0">cleanwaterforruralgambia@gmail.com</Typography>
      </Grid>
      <Grid item margin="1rem 0">
        <Typography variant="body2" align="right">
          © 2023 - All Rights Reserved
        </Typography>
        <Box margin="1rem 0">
          <FacebookIcon sx={{ marginRight:".5rem" }}/>
          <TwitterIcon sx={{ margin:"0 .5rem" }}/>
          <InstagramIcon sx={{ margin:"0 .5rem" }}/>
        </Box>
      </Grid>
    </FooterStyled>
  );
}

export default Footer;
