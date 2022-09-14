import Card from '@mui/material/Card';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

function Tasks({taskNumber, stepNumber, rightArrow, leftArrow, updateData, deleteTask, taskId}) {
    return (
        <Card variant="outlined" style={{margin: "10px", height: "120px", position: "relative"}}>
            <div style={{position: "absolute", top: "10px", left: "10px"}}>{taskNumber}</div>
            <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                color: "red",
                fontSize: "15px",
                cursor: "pointer"
            }} onClick={() => deleteTask(taskId)}>
                <DeleteOutlineOutlinedIcon/>
                <div style={{marginTop: "3px"}}>Delete</div>
            </div>
            {
                rightArrow ?
                    <div style={{position: "absolute", bottom: "10px", right: "10px"}}>
                        <ArrowCircleRightOutlinedIcon
                            onClick={() => updateData(taskId, stepNumber + 1)}/>
                    </div> : ""
            }
            {
                leftArrow ?
                    <div style={{position: "absolute", bottom: "10px", left: "10px"}}>
                        <ArrowCircleLeftOutlinedIcon
                            onClick={() => updateData(taskId, stepNumber - 1)}/>
                    </div> : ""
            }
        </Card>
    )
}

export default Tasks