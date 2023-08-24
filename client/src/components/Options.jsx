import React,{useContext,useState} from 'react';
import { Button,TextField,Grid,Typography,Container,Paper} from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {Assignment,Phone,PhoneDisabled} from '@mui/icons-material'
import { SocketContext } from '../SocketContext';
import './options.css';

function Options({children}){
    const {me,callAccepted,name,setName,callEnded,leaveCall,callUser}=useContext(SocketContext);
    const [idToCall,setIdToCall]=useState('');
    return(
        <Container className='container'>
            <Paper elevation={10} className='paper'>
                <form noValidate autoComplete='off' className='root'>
                    <Grid container className='gridContainer'>
                        <Grid className='padding' item xs={12} md={6}>
                            <Typography gutterBottom variant="h6">Account Info</Typography>
                            <TextField label="Name" value={name} onChange={(e)=>setName(e.target.value)} fullWidth/>
                            <CopyToClipboard text={me}>
                                <Button variant='contained' color='primary' fullWidth startIcon={<Assignment fontSize='large'/>}>
                                    Copy Your Id
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid className='padding' item xs={12} md={6}>
                            <Typography gutterBottom variant="h6">Make a Call</Typography>
                            <TextField label="ID to Call" value={idToCall} onChange={(e)=>setIdToCall(e.target.value)} fullWidth/>
                            {callAccepted&& !callEnded ? (
                                <Button variant='contained' color='secondary' startIcon={<PhoneDisabled fontSize='large'/>} fullWidth onClick={leaveCall} className='margin'>
                                    Hang Up
                                </Button>
                            ): (
                                <Button variant='contained' color='primary' startIcon={<Phone fontSize='large'/>} fullWidth onClick={()=>callUser(idToCall)} className='margin'>
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
            {children}
            </Paper>
        </Container>
    )
}

export default Options;