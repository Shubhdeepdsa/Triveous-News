import { AppBar, Box, Button, Grid, Slider } from "@mui/material";
import React from "react";
import Typography from '@mui/material/Typography';
import Toolbar from "@mui/material";
import Container from '@mui/material/Container';
import { useUserAuth } from "../context/AuthContext";
const Navbar = () => {
    const  {setGridColoumn} = useUserAuth()
    let handleGridChange = (value) =>  {
        let column = Math.floor(12 / value)
        setGridColoumn(column)
    }
    return (
        <AppBar component="nav" sx={{ backgroundColor: '#28262C' }}>
            <Container sx={{ flexGrow: 1 }}>
                <Grid container spacing={3} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant="h3" sx={{ mt: '5px', ml: '5px', color: '#998FC7' }}>Triveous News</Typography>
                    </Grid>
                    <Grid item>
                        <Slider
                            sx={{mt:'10px'}}
                            defaultValue={2}
                            step={1}
                            marks
                            min={1}
                            max={5}
                            color="#998FC7"
                            valueLabelDisplay="auto"
                            onChange={(e) => {handleGridChange(e.target.value)}}
                            />
                    </Grid>
                    <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button sx={{ backgroundColor: 'orange', color: '#F9F5FF' }}>Login</Button>
                    </Grid>
                </Grid>
            </Container>
        </AppBar >
    )
}

export default Navbar;
