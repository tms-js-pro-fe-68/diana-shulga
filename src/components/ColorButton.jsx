import React, {useState} from "react"
import { Box, Typography } from "@mui/material";


export default function Button(){
  const [color, setColor] = useState('blue');
  
  return (
    <Box mt = {10}>
        <Typography 
            fontSize="30px" 
            > 
            The first task with changeColor button
        </Typography>
        <Box sx={{
            backgroundColor: color,
            width: "200px",
            borderRadius: "100px",
            fontSize: "30px",
            color: "#9a32f0",
            py: 10,
            margin: "50px auto",
            textAlign: "center"
        }} 
        onClick={() => {setColor((prevColor) => (prevColor === 'yellow' ? 'blue' : 'yellow'))}} role="button" tabIndex={0}>
        click
        </Box>
    </Box>
  )
}