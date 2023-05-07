import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import { Box } from '@mui/material';
import Footer from '../components/Footer/Footer';
   
function RouteLayout(props) {
    return (
        <>
            <Navigation />
            <Box sx={{ marginTop: "2rem"}}>
                <Outlet />
            </Box>
            <Footer />
        </>
    );
}

// out is where other components are rendered

export default RouteLayout;