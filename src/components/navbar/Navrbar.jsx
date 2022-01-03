import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core'
import React from 'react'

const Navrbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        3D-News
                    </Typography>
                    <Box>
                        <Button color="inherit">Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navrbar
