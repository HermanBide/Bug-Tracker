import React, {useState} from 'react'
import useStyles from "./styles";
//use to upload files to app
import Filebase from 'react-file-base64'
import { TextField, Button , Typography, Paper } from '@material-ui/core/'

function Form() {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const handleSubmit = (e) => {
    e.prevent.target
  }

  const clear = (e) => {
    e.prevent.target
  }
  return (
    <div>
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
        <Typography varient="h6">Create a Memory</Typography>
        <TextField 
              name="creator" 
              variant="outlined" 
              label="Creator" 
              fullWidth 
              value={postData.creator} 
              onChange={(e) => setPostData({ ...postData, creator: e.target.value})}
         />
                 <TextField 
              name="title" 
              variant="outlined" 
              label="Title" 
              fullWidth 
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value})}
         />
                 <TextField 
              name="message" 
              variant="outlined" 
              label="Message" 
              fullWidth 
              value={postData.message} 
              onChange={(e) => setPostData({ ...postData, message: e.target.value})}
         />
                 <TextField 
              name="tag" 
              variant="outlined" 
              label="Tag" 
              fullWidth 
              value={postData.tags} 
              onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
         />
         <div className={classes.fileInput}>
         {/*upload picture files*/}
            <Filebase type="file" multiple={false} onDone={({base64}) =>  setPostData({...postData, selectedFile: base64})}/> 
          </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit</Button>
            <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth > Clear</Button>
      </form>
      </Paper>
    </div>
  )
}

export default Form