import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation';
import { Box } from '@mui/material';
   
function RouteLayout(props) {
    return (
        <>
            <Navigation />
            <Box sx={{ marginTop: "4rem", padding: { lg: "3rem"}}}>
                <Outlet />
            </Box>
        </>
    );
}

// out is where other components are rendered

export default RouteLayout;