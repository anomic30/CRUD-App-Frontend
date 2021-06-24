import React, { useState } from 'react'
import Axios from 'axios';
import { indigo } from '@material-ui/core/colors';
import { FormGroup, FormControl, Input, withStyles, InputLabel, Button, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
require('dotenv').config();
const DB = process.env.REACT_APP_PATH_URL;

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo['A700']),
      backgroundColor: indigo['A700'],
      '&:hover': {
        backgroundColor: indigo['A400'],
      },
    },
}))(Button);
  
const useStyle = makeStyles({
    containe: {
        width: '50%',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '6%',
        '& > *':{
            marginTop: '20px',
        }
    },
    heading: {
        fontSize: '30px',
        fontWeight: 'bold'
    }
})

const AddUsers = () => {
    const classes = useStyle();
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);

    const addToList = () => {
        Axios.post(`${DB}/insert`, {
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
        })
        setName("");
        setEmail("");
        setPhone(0);
        setGender("");
        setAge(0);
        history.push('./');
    }

    return (
        <div className="conatainer">
        <div className="back" />
        <FormGroup className={classes.containe}>
            <div className={classes.heading}>Add user details:</div>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input className="inp" onChange={(e)=>{setName(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input className="inp" onChange={(e)=>{setEmail(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input className="inp" onChange={(e)=>{setPhone(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input className="inp" onChange={(e)=>{setGender(e.target.value)}}/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input className="inp" onChange={(e)=>{setAge(e.target.value)}}/>
            </FormControl>
            <ColorButton type="reset" variant="contained" color="primary" onClick={addToList}>
                Add User
            </ColorButton>
            </FormGroup>
        </div>
    )
}

export default AddUsers;
