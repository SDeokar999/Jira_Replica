import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import {v4} from 'uuid';
const AddTask=({openDialog,setOpenDialog,addNewTask})=>{
    const[title,setTitle]=useState()
    console.log(title)
   return <Dialog open={openDialog}>
    <div style={{width:"400px",height:"200px",position:"relative"}}>
        <TextField id="outlined-basic" 
        label="Add Title" 
        variant="outlined" 
        type="number" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        style={{position:"absolute",top:"50px",left:"10%"}}/>
    <CloseIcon style={{position:"absolute",top:"20px",right:"20px",cursor:"pointer"}}
          onClick={()=>setOpenDialog(false)}/>
        <Button variant="outlined" style={{position:"absolute",bottom:"20px",left:"10%"}} onClick={()=>{setOpenDialog(false);addNewTask({taskId:v4(),stepNumber:1,taskNumber:Number(title)})}}>
            Add Task
            </Button>

    </div>
</Dialog>
}

export default AddTask;