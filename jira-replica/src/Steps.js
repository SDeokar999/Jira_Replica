import Grid from '@mui/material/Grid';
import {Box} from '@mui/system';
import Tasks from './Tasks';

function Steps({taskData, stepNumber, rightArrow, leftArrow, updateData, deleteTask}) {

    return (
        <Grid item xs={3}>
            <Box style={{minHeight: "500px", backgroundColor: "#E4E7EE", paddingBottom: "5px"}}>
                <Box style={{padding: "20px"}}>STEP {stepNumber}</Box>
                {
                    taskData.map((values) => {
                        return <Tasks taskNumber={values.taskNumber} taskId={values.taskId} stepNumber={stepNumber}
                                      updateData={updateData} deleteTask={deleteTask} rightArrow={rightArrow}
                                      leftArrow={leftArrow}/>
                    })
                }

            </Box>
        </Grid>
    );
}

export default Steps;