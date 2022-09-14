import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Steps from './Steps';
import AddTask from './AddTask'
import SearchBox from './SearchBox'
import {useState} from 'react';
import Button from '@mui/material/Button';
import {v4} from 'uuid';

function App() {
    const [openDialog, setOpenDialog] = useState(false)
    const CardData = [{taskId: v4(), stepNumber: 1, taskNumber: 1}, 
      {taskId: v4(), stepNumber: 1, taskNumber: 8}, 
      {taskId: v4(), stepNumber: 2, taskNumber: 2}, 
      {taskId: v4(), stepNumber: 3, taskNumber: 3}, 
      {taskId: v4(), stepNumber: 3, taskNumber: 7},
      {taskId: v4(), stepNumber: 4, taskNumber: 4}, 
      {taskId: v4(), stepNumber: 4, taskNumber: 5}];
    const [data, setData] = useState(CardData)
    const [dataToShow, setDataToShow] = useState(data)
    const [searchText, setSearchText] = useState('')
    const filterArr1 = dataToShow.filter((e1) => e1.stepNumber === 1)
    const filterArr2 = dataToShow.filter((e1) => e1.stepNumber === 2)
    const filterArr3 = dataToShow.filter((e1) => e1.stepNumber === 3)
    const filterArr4 = dataToShow.filter((e1) => e1.stepNumber === 4)
    let stepperData = {filterArr1, filterArr2, filterArr3, filterArr4}
    const updateData = (taskId, stepNumber) => {
        let newData = data.map((ele) => {
            if (ele.taskId === taskId) {
                ele.stepNumber = stepNumber
            }
            return ele
        })
        setData(newData)
    }
    const deleteTask = (taskId) => {
        let newData = data.filter((ele) => ele.taskId !== taskId)
        setData(newData)
        setDataToShow(newData)
    }
    const addNewTask = (newTask) => {
        data.push(newTask)
        return data
    }

    const showSearchResults = (searchedText) => {
        let newDataToShow = data.filter((ele) => ele.taskNumber.toString().includes(searchedText))
        setDataToShow(newDataToShow)
    }
    return (

        <Container maxWidth="lg" style={{margin: "50px"}}>
            <Grid container style={{margin: "20px 0px", height: "50px"}}>
                <Grid item xs={3}>
                    <SearchBox showSearchResults={showSearchResults} setSearchText={setSearchText}
                               searchText={searchText}/>
                </Grid>
                <Grid item xs={7}>

                </Grid>
                <Grid item xs={2}
                      style={{alignItems: "center", justifyContent: "center", display: "flex", cursor: "pointer"}}>

                    <Button variant="outlined" onClick={() => setOpenDialog(true)} startIcon={<AddOutlinedIcon/>}
                            style={{border: "1px solid lightgrey", color: "black", backgroundColor: "#E4E7EE"}}>
                        Add Task
                    </Button>

                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {
                    Object.entries(stepperData).map(([key, value], index) => {
                        let hideLeftArrow = index === 0;
                        let hideRightArrow = index === Object.entries(stepperData).length - 1;
                        return <Steps taskData={value} 
                                      addNewTask={addNewTask} 
                                      updateData={updateData}
                                      deleteTask={deleteTask} 
                                      stepNumber={index + 1} 
                                      rightArrow={!hideRightArrow}
                                      leftArrow={!hideLeftArrow}/>

                    })
                }

            </Grid>
            <AddTask addNewTask={addNewTask} openDialog={openDialog} setOpenDialog={setOpenDialog}/>
        </Container>

    );
}

export default App;