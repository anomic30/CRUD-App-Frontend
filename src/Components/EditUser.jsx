import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { green } from '@material-ui/core/colors';
import { FormGroup, FormControl, Input, withStyles, InputLabel, Button, makeStyles } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
require('dotenv').config();
const DB = process.env.REACT_APP_PATH_URL;

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(green['A700']),
      backgroundColor: green['A700'],
      '&:hover': {
        backgroundColor: green['A400'],
      },
    },
}))(Button);
  
const useStyle = makeStyles({
    container: {
        width: '50%',
        maxWidth: '500px',
        margin: 'auto',
        marginTop: '6%',
        '& > *': {
            marginTop: '20px',
        }
    },
    heading: {
        fontSize: '30px',
        fontWeight: 'bold'
    }
});

const initialValues = {
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
}

const EditUser = () => {
    const classes = useStyle();
    const history = useHistory();
    const { id } = useParams();
    
    const [user, setUser] = useState(initialValues);
    const { name, email, phone, gender, age } = user;

    useEffect(() => {
        Axios.get(`${DB}/person/${id}`).then((response) => {
            setUser(response.data);
        })
    },[id]);

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    
    const updateUser = () => {
        Axios.put(`${DB}/update`, {
            id: id,
            name: name,
            email: email,
            phone: phone,
            gender: gender,
            age: age,
        });
        history.push('../');
    };

    return (
        <div className="conatainer">
        <div className="back" />
        <FormGroup className={classes.container}>
            <div className={classes.heading}>Edit User details:</div>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name='name' value={user.name || ''}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input value={user.email || ''} onChange={(e)=>onValueChange(e)} name='email'/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input value={user.phone || ''} onChange={(e)=>onValueChange(e)} name='phone'/>
            </FormControl>
            <FormControl>
                <InputLabel>Gender</InputLabel>
                <Input value={user.gender || ''} onChange={(e)=>onValueChange(e)} name='gender'/>
            </FormControl>
            <FormControl>
                <InputLabel>Age</InputLabel>
                <Input value={user.age || ''} onChange={(e)=>onValueChange(e)} name='age'/>
            </FormControl>
            <ColorButton onClick={updateUser} variant="contained" color="primary">
                Update User
            </ColorButton>
            </FormGroup>
        </div>
    )
}

export default EditUser;
