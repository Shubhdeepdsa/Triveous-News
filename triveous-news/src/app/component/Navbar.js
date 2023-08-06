import { AppBar, Box, Button, Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material";
import Container from '@mui/material/Container';
const Navbar = () => {

    return (
        <AppBar component="nav" sx={{ backgroundColor: '#28262C' }}>
            <Container sx={{ flexGrow: 1, flexDirection:'row', alignContent:'space-between' }}>
                <Grid container spacing={3} sx={{flexDirection:'row', alignContent:'space-between' }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ mt: '5px', ml: '5px', color: '#998FC7' }}>Triveous News</Typography>
                    </Grid>
                    <Grid item>
                        <Button sx={{ backgroundColor: '#998FC7', color:'#F9F5FF', mt:'13px'}}>Login</Button>
                    </Grid>

                </Grid>
            </Container>
        </AppBar>
    )
}
export default Navbar