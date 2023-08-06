import { AppBar, Box, Button, Grid } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material";
import Container from '@mui/material/Container';
const Navbar = () => {

    return (
        <AppBar component="nav" sx={{ backgroundColor: '#14248A' }}>
            <Container sx={{ flexGrow: 1, flexDirection:'row', alignContent:'space-between' }}>
                <Grid container spacing={3} sx={{flexDirection:'row', alignContent:'space-between' }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ mt: '5px', ml: '5px', color: '#F9F5FF' }}>Triveous News</Typography>
                    </Grid>
                    <Grid item>
                        <Button sx={{ backgroundColor: '#D4C2FC', mt:'13px'}}>Login</Button>
                    </Grid>

                </Grid>
            </Container>
        </AppBar>
    )
}
export default Navbar