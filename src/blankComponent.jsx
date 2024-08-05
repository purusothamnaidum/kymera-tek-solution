import { Box, useMediaQuery, useTheme } from '@mui/material';
import React from "react";

const BlankComponent=()=>{

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Box
        sx={{
            width:"100%",
            height:isMobile?"153px":"103px",
               }       }>

        </Box>
    )
}
export default BlankComponent;